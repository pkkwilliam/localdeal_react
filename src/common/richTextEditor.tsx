import React from "react";
import ApplicationComponent from "./applicationComponent";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UPLOAD_IMAGE } from "./middleware/service";
import Resizer from "react-image-file-resizer";
import { isObject } from "util";

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
  ["clean"] // remove formatting button,
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
        ref={ref => (this.quillRef = ref)}
        modules={this.modules()}
        onChange={(content, delta, source, editor) => {
          if (source === "user") {
            if (delta.ops?.length) {
              delta.ops.forEach(line => {
                if (isObject(line.insert) && line.insert.image) {
                  console.log("got image");
                  fetch(line.insert.image)
                    .then(base64 => base64.blob())
                    .then(blob => {
                      this.imageHandler(blob);
                    });
                }
              });
            }
          }
          this.props.onChangeValue(content);
        }}
        placeholder={"Need Label - 請加入內容..."}
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

  protected modules() {
    return {
      toolbar: {
        container: richTextEditorOptions
      }
    };
  }

  protected getCurrentIndex(): number {
    const currentIndex: number = this.quillRef.getEditor().getSelection().index;
    return currentIndex;
  }

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

  protected centerAlignLine(): void {
    const currentIndex: number = this.getCurrentIndex();
    this.quillRef
      .getEditor()
      .formatLine(currentIndex, currentIndex + 1, "align", "center");
  }

  protected leftAlignLine(): void {
    const currentIndex: number = this.getCurrentIndex();
    this.quillRef
      .getEditor()
      .formatLine(currentIndex, currentIndex + 1, "align", "");
  }

  protected createImageElement(imageUrl: string): HTMLImageElement {
    const image: HTMLImageElement = document.createElement("img");
    image.src = imageUrl;
    image.setAttribute("style", "width:10px");
    return image;
  }

  protected createNewLine() {
    this.quillRef.getEditor().insertText(this.getCurrentIndex(), "\n");
  }

  imageHandler = async (file: any) => {
    console.log("enter image handler function");
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
      .then(response => {
        this.onImageSucceedUpload(response.url);
      });
  };

  protected async onImageSucceedUpload(imageUrl: string) {
    this.removePreviousInput();
    this.quillRef
      .getEditor()
      .insertEmbed(this.getCurrentIndex(), "image", imageUrl);
    this.setCursorAtNextIndex();
    this.centerAlignLine();
    this.createNewLine();
    this.leftAlignLine();
  }

  protected removePreviousInput(): void {
    const currentIndex: number = this.getCurrentIndex();
    console.log("remove content at index:", currentIndex);
    this.quillRef.getEditor().deleteText(currentIndex - 1, 1);
  }

  protected setLine(lineNumber: number): void {
    this.line = lineNumber;
  }

  protected setCursorAtNextIndex(): void {
    const currentIndex: number = this.getCurrentIndex();
    this.quillRef.getEditor().setSelection(currentIndex + 1, currentIndex + 1);
  }
}

const styles = {
  quillStyle: {
    borderRadius: 5,
    width: "inherit"
  }
};
