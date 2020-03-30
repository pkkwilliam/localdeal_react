import Resizer from "react-image-file-resizer";

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

  public async compressImage(file: File) {
    const { height, size, type, width } = await this.getImageInfo(file);
    const processedImage = await this.imageResize(
      file,
      type,
      height,
      width,
      10
    );
    return processedImage;
  }
}
