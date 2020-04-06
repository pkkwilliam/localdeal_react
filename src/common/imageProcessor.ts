import Resizer from "react-image-file-resizer";
import loadImage from "blueimp-load-image";

export default class ImageProcessor {
  public imageCompress(
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
        width / 5,
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
        return resolve({
          height: image.height,
          size: file.size,
          type: file.type,
          width: image.width,
        });
      };
    });
  }

  public async imagePrecprocess(file: any): Promise<File> {
    let blob = await this.transferToBlob(file);
    const { height, size, type, width } = await this.getImageInfo(blob);
    console.debug("original image size:", size);
    const imageCompressQuality = size > 100000 ? 10 : 100;
    const imageNameSplit = type.split("/");
    console.log(imageNameSplit, imageNameSplit[imageNameSplit.length - 1]);
    const processedImage = await this.imageCompress(
      blob,
      imageNameSplit[imageNameSplit.length - 1],
      height,
      width,
      imageCompressQuality
    );
    await this.getImageInfo(processedImage);
    return Promise.resolve(processedImage);
  }

  protected transferToBlob(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return fetch(file)
        .then((originalImage) => originalImage.blob())
        .then((result) => resolve(result));
    });
  }

  public fixRotation(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      loadImage(
        file,
        (img: any) => {
          return resolve(img.toDataURL(this.guessImageMime(file)));
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
