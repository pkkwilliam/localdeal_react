import React, { Component } from "react";

interface Props {
  alt?: string;
  src: string;
  size?: "big" | "medium" | "small" | "miniCircularImage";
}

export default class Image extends Component<Props> {
  render() {
    return (
      <img
        alt={this.props?.alt ?? "image"}
        src={this.props.src}
        style={{ ...styles.defaultStyle, ...this.getImageSizeStyle() }}
      />
    );
  }

  protected getImageSizeStyle() {
    switch (this.props.size) {
      case "big":
        return styles.bigImage;
      case "medium":
        return styles.mediumImage;
      case "miniCircularImage":
        return styles.miniCircularImage;
      default:
        return styles.smallImage;
    }
  }
}

const styles = {
  bigImage: { width: 100 },
  defaultStyle: {
    borderRadius: 5
  },
  miniCircularImage: {
    borderRadius: 30,
    width: 35
  },
  mediumImage: { width: 75 },
  smallImage: { width: 50 }
};
