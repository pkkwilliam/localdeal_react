import Resizer from "react-image-file-resizer";
import loadImage from "blueimp-load-image";

export default class ImageProcessor {
  public imageResize(
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

  public async getImageInfo(
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

  public async compressImage(file: any, raw: string) {
    let fixed = await this.fixRotation(file, this.guessImageMime(raw));
    const { height, size, type, width } = await this.getImageInfo(file);
    let iamgeBlob = await this.transferToBlob(fixed);
    const processedImage = await this.imageResize(
      iamgeBlob,
      type,
      height,
      width,
      5
    );
    return processedImage;
  }

  protected transferToBlob(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return fetch(file)
        .then(originalImage => originalImage.blob())
        .then(result => resolve(result));
    });
  }

  protected fixRotation(file: any, imageType: string): Promise<any> {
    return new Promise((resolve, reject) => {
      loadImage(
        file,
        (img: any) => {
          return resolve(img.toDataURL(imageType));
        },
        { orientation: true }
      );
    });
  }

  guessImageMime(data: string): string {
    if (data.charAt(0) === "/") {
      return "image/jpeg";
    } else if (data.charAt(0) === "R") {
      return "image/gif";
    } else if (data.charAt(0) === "i") {
      return "image/png";
    } else {
      return "";
    }
  }
}
