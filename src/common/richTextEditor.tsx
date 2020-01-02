import React from "react";
import ApplicationComponent from "./applicationComponent";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UPLOAD_IMAGE } from "./middleware/service";

const RESIZE_IMAGE_PERCENTAGE: number = 0.5;

const richTextEditorOptions = [
  [
    "bold",
    "italic",
    "underline",
    "strike",
    { header: [1, 2, 3, 4, 5, 6, false] },
    { align: [] }
  ], // toggled buttons
  //   ["blockquote", "code-block"],
  ["image"],
  ["link"],
  //   [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  //   [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //   [{ direction: "rtl" }], // text direction

  //   [{ size: ["small", "medium", "large", "huge"] }], // custom dropdown
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //   [{ font: [] }],
  ["clean"] // remove formatting button
];

// const modules = {
//   toolbar
// };

export interface Props {
  onChangeValue: (value: string) => void;
}

export default class RichTextEditor extends ApplicationComponent<Props> {
  private quillRef: any;

  render() {
    return (
      <ReactQuill
        ref={ref => (this.quillRef = ref?.getEditor())}
        modules={this.getModules()}
        onChange={value => this.props.onChangeValue(value)}
      ></ReactQuill>
    );
  }

  getModules() {
    return {
      toolbar: {
        container: richTextEditorOptions,
        handlers: {
          image: this.imageHandlerTest
        }
      }
    };
  }

  // this.quillRef.format() // change the current format, it will not affect anything that is already in the content area
  // this.quillRef.formatLine() // format the whole line, usually it will affect the whole globally.
  // this.quillRef.formatText() // this work for image as well!!! give the style for the current dom

  // TODO this method needs to be refine!!!
  imageHandlerTest = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input.files) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("image", file, "image");

        // // Save current cursor state
        const range = this.quillRef.getSelection(true);

        // // need to replace this with in app progressor!!!
        this.quillRef.formatLine(range.index, 1, "align", "center");
        this.quillRef.formatText(range.index, 1, {
          align: "center",
          width: 100,
          height: 100
        });

        // this.quillRef.setSelection(range.index + 2);
        this.appContext.serviceExecutor
          .execute(UPLOAD_IMAGE(formData))
          .then(result => {
            let imageUrl: string = result.url;
            this.quillRef.deleteText(range.index, 1);
            this.quillRef.insertEmbed(range.index, "image", imageUrl);
            this.resizeImage(imageUrl).then(({ height, width }) => {
              this.quillRef.formatText(range.index, 1, {
                height,
                width
              });
              this.quillRef.setSelection(range.index + 1);
            });
          });
      }
    };
  };

  protected getImageResizeValue() {
    return RESIZE_IMAGE_PERCENTAGE;
  }

  protected async resizeImage(
    url: string
  ): Promise<{ height: number; width: number }> {
    return new Promise((resolve, reject) => {
      let resizeValue: number = this.getImageResizeValue();
      let image = new Image();
      image.src = url;
      image.onload = () =>
        resolve({
          height: image.height * resizeValue,
          width: image.width * resizeValue
        });
    });
  }
}
