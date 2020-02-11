import React from "react";
import ApplicationComponent from "./applicationComponent";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UPLOAD_IMAGE } from "./middleware/service";
import Resizer from "react-image-file-resizer";

const richTextEditorOptions = [
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [
    "bold",
    "italic",
    "underline",
    "strike",
    { header: [1, 2, 3, 4, 5, 6, false] }
    // { align: [] }
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
          image: this.imageHandler
        }
      }
    };
  }

  // this.quillRef.format() // change the current format, it will not affect anything that is already in the content area
  // this.quillRef.formatLine() // format the whole line, usually it will affect the whole globally.
  // this.quillRef.formatText() // this work for image as well!!! give the style for the current dom

  async getImageInfo(file: File) {
    const image = new Image();
    image.src = await URL.createObjectURL(file);
    console.info(
      `input image type:${file.type} size:${file.size} height:${image.height} width:${image.width}`
    );
    return {
      height: image.height,
      size: file.size,
      type: file.type,
      width: image.width
    };
  }

  async imageResize(
    file: File,
    imageType: string,
    height: number,
    width: number,
    quality: number
  ) {
    let image = file;
    await Resizer.imageFileResizer(
      file,
      height,
      width,
      imageType,
      quality,
      0,
      (processedImage: File) => {
        image = processedImage;
      },
      "blob"
    );
    return image;
  }

  imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input.files) {
        const file = input.files[0];

        // TODO show spinner to indicate that the image is being upload

        // save current cursor state
        const range = this.quillRef.getSelection(true);

        // get input image detail info
        const { height, size, type, width } = await this.getImageInfo(file);

        // resize image according to height, width and quality
        const processedImage = await this.imageResize(file, type, 300, 300, 50);

        // create a FormData object inorder to submit it as Multipart file for REST controller
        const formData: FormData = new FormData();
        formData.append("image", processedImage, "image");

        // upload image
        this.appContext.serviceExecutor
          .execute(UPLOAD_IMAGE(formData))
          .then(response => {
            const imageUrl: string = response.url;
            this.quillRef.insertEmbed(range.index, "image", imageUrl);
            this.quillRef.setSelection(range.index + 1);
            this.quillRef.setSelection();
          });

        // Resizer.imageFileResizer(
        //   file,
        //   300,
        //   300,
        //   "PNG",
        //   50,
        //   0,
        //   (uri: any) => {
        //     // const buffer = Buffer.from(uri, "base64");
        //     const formData = new FormData();
        //     formData.append("image", file, "image");
        //     this.quillRef.setSelection(range.index + 2);
        //     // this.quillRef.deleteText(range.index, 1);
        //     this.quillRef.insertEmbed(range.index, "image", file);
        //     this.quillRef.setSelection(range.index + 1);
        //     // this.appContext.serviceExecutor
        //     //   .execute(UPLOAD_IMAGE(formData))
        //     //   .then(result => {
        //     //     let imageUrl: string = result.url;
        //     //     this.quillRef.deleteText(range.index, 1);
        //     //     this.quillRef.insertEmbed(range.index, "image", imageUrl);
        //     //     this.quillRef.setSelection(range.index + 1);
        //     //   });
        //   },
        //   "blob"
        // );

        // // need to replace this with in app progressor!!!
        // this.quillRef.formatLine(range.index, 1, "align", "center");
        // this.quillRef.formatText(range.index, 1, {
        //   align: "center"
        // });
        // this.quillRef.setSelection(range.index + 2);
        // this.appContext.serviceExecutor
        //   .execute(UPLOAD_IMAGE(formData))
        //   .then(result => {
        //     let imageUrl: string = result.url;
        //     this.quillRef.deleteText(range.index, 1);
        //     this.quillRef.insertEmbed(range.index, "image", imageUrl);
        //     this.resizeImage(imageUrl).then(({ height, width }) => {
        //       this.quillRef.formatText(range.index, 1, {
        //         height,
        //         width
        //       });
        //       this.quillRef.setSelection(range.index + 1);
        //     });
        //   });
      }
    };
  };
}
