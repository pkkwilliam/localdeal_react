import React from "react";
import ApplicationComponent from "./applicationComponent";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UPLOAD_IMAGE } from "./middleware/service";

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

const imageHandler = () => {
  console.log("use image handler");
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    if (input.files) {
      const file = input.files[0];
      const formData = new FormData();

      formData.append("image", file);

      // // Save current cursor state
      // const range = this.quill.getSelection(true);

      // // Insert temporary loading placeholder image
      // this.quill.insertEmbed(
      //   range.index,
      //   "image",
      //   `${window.location.origin}/images/loaders/placeholder.gif`
      // );

      // // Move cursor to right side of image (easier to continue typing)
      // this.quill.setSelection(range.index + 1);

      // const res = await apiPostNewsImage(formData); // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'

      // // Remove placeholder image
      // this.quill.deleteText(range.index, 1);

      // // Insert uploaded image
      // this.quill.insertEmbed(range.index, "image", res.body.image);
    }
  };
};

export interface Props {}

export default class RichTextEditor extends ApplicationComponent<Props> {
  private quillRef: any;

  render() {
    return (
      <ReactQuill
        ref={ref => (this.quillRef = ref?.getEditor())}
        modules={this.getModules()}
        onChange={value => console.log(value)}
      ></ReactQuill>
    );
  }

  getModules() {
    return {
      toolbar: {
        container: richTextEditorOptions,
        handlers: {
          image: () => this.imageHandlerTest()
        }
      }
    };
  }

  imageHandlerTest = () => {
    console.log("use image handler");
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (input.files) {
        const file = input.files[0];
        const formData = new FormData();

        formData.append("image", file, "image");

        // Save current cursor state
        const range = this.quillRef.getSelection(true);

        // Insert temporary loading placeholder image
        this.quillRef.insertEmbed(
          range.index,
          "image",
          `${window.location.origin}/images/loaders/placeholder.gif`
        );

        // Move cursor to right side of image (easier to continue typing)
        this.quillRef.setSelection(range.index + 1);

        // upload picture
        this.appContext.serviceExecutor
          .execute(UPLOAD_IMAGE(formData))
          .then(result => {
            let imageUrl: string = result.name;
            console.log(imageUrl);
            this.quillRef.insertEmbed(range.index, "image", imageUrl);
          });

        // https://storage.cloud.google.com/deal_image/wow.png
        const res = "https://storage.cloud.google.com/deal_image/wow.png"; // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'

        // Remove placeholder image
        this.quillRef.deleteText(range.index, 1);

        // Insert uploaded image
        // this.quillRef.insertEmbed(range.index, "image", res);
      }
    };
  };
}
