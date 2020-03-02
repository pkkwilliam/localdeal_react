import React from "react";
import ApplicationComponent from "./applicationComponent";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UPLOAD_IMAGE } from "./middleware/service";
import Resizer from "react-image-file-resizer";

var Delta = Quill.import("delta");

const richTextEditorOptions = [
  [{ color: [] }], // dropdown with defaults from theme
  ["bold", "italic", "strike", { header: [1, false] }, { align: [] }], // toggled buttons
  //   ["blockquote", "code-block"],
  ["image"],
  ["link"],
  //   [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  //   [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //   [{ direction: "rtl" }], // text direction

  //   [{ size: ["small", "medium", "large", "huge"] }], // custom dropdown
  //   [{ font: [] }],
  ["clean"] // remove formatting button
];

// const modules = {
//   toolbar
// };

var Parchment = Quill.import("parchment");
var offsetAttributor = new Parchment.Attributor.Attribute(
  "nameClass",
  "class",
  {
    scope: Parchment.Scope.INLINE
  }
);
Quill.register(offsetAttributor);

// var Block = Quill.import("blots/block");
// Block.tagName = "DIV";
// Quill.register(Block, true);

export interface Props {
  onChangeValue: (value: string) => void;
  style?: any;
}

export default class RichTextEditor extends ApplicationComponent<Props> {
  private line: number = 0;
  private quillRef: any;

  render() {
    return (
      <ReactQuill
        ref={ref => (this.quillRef = ref?.getEditor())}
        modules={this.getModules()}
        onChange={(content, delta, source, editor) => {
          this.props.onChangeValue(content);
        }}
        style={{ ...styles.quillStyle, ...this.props.style }}
      ></ReactQuill>
    );
  }

  protected createNewFormData(
    content: any,
    name: string = "content",
    fileName: string = "newFile"
  ): FormData {
    console.log("create new FormData object");
    const newFormData: FormData = new FormData();
    newFormData.append(name, content, fileName);
    return newFormData;
  }

  protected getModules() {
    return {
      toolbar: {
        container: richTextEditorOptions,
        handlers: {
          image: this.imageHandler
        }
      }
    };
  }

  // this.quillRef.format() // change the current format, it will not affect anything that is already in the content area
  // this.quillRef.formatLine() // format the whole line, usually it will affect the whole globally.
  // this.quillRef.formatText() // this work for image as well!!! give the style for the current dom

  protected async getImageInfo(
    file: File
  ): Promise<{ height: number; size: number; type: string; width: number }> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        console.debug(
          `type:${file.type} size:${file.size} height:${image.height} width:${image.width}`
        );
        return resolve({
          height: image.height,
          size: file.size,
          type: file.type,
          width: image.width
        });
      };
    });
  }

  protected imageResize(
    file: File,
    imageType: string,
    height: number,
    width: number,
    quality: number
  ): Promise<File> {
    return new Promise((resolve, reject) => {
      const callBackFunction = (processedImage: File) => {
        resolve(processedImage);
      };
      Resizer.imageFileResizer(
        file,
        width,
        height,
        imageType,
        quality,
        0,
        callBackFunction,
        "blob"
      );
    });
  }

  protected centerAlignLine(start: number, end: number): void {
    this.quillRef.formatLine(start, end, "align", "center");
  }

  protected leftAlignLine(start: number, end: number): void {
    this.quillRef.formatLine(start, end, "align", "");
  }

  protected createImageElement(imageUrl: string): HTMLImageElement {
    const image: HTMLImageElement = document.createElement("img");
    image.src = imageUrl;
    image.setAttribute("style", "width:10px");
    return image;
  }

  protected createNewLine(index: number) {
    this.quillRef.insertText(index + 1, "\n");
  }

  imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input.files) {
        // save current cursor state
        const file = input.files[0];

        // TODO show spinner to indicate that the image is being upload

        // get input image detail info
        console.debug("original");
        const originalImageInfo = await this.getImageInfo(file);

        // resize image according to height, width and quality
        const processedImage = await this.imageResize(
          file,
          originalImageInfo.type,
          originalImageInfo.height,
          originalImageInfo.width / 5,
          10
        );

        // just print file detail in log, no functionality
        console.debug("processed");
        this.getImageInfo(processedImage);

        // create a FormData object inorder to submit it as Multipart file for REST controller
        const formData: FormData = new FormData();
        formData.append("image", processedImage, "image");

        // upload image
        this.appContext.serviceExecutor
          .execute(UPLOAD_IMAGE(formData))
          .then(response => this.onImageSucceedUpload(response.url));
      }
    };
  };

  protected async onImageSucceedUpload(imageUrl: string) {
    const range = this.quillRef.getSelection();
    this.quillRef.insertEmbed(range.index, "image", imageUrl);
  }

  private getAndAddLine(): number {
    const currentLine: number = this.getLine();
    this.setLine(currentLine + 1);
    return currentLine;
  }

  private getLine(): number {
    console.log("current line:", this.line);
    return this.line;
  }

  private setLine(lineNumber: number): void {
    this.line = lineNumber;
  }
}

const styles = {
  quillStyle: {
    borderRadius: 5,
    width: "inherit"
  }
};
