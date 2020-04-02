import React, { Component } from "react";
import Slider from "react-slick";
import "./slide.css";

interface Props {
  dealIndex: number;
  height?: number;
  fileUrls: string[];
}

export default class Slide extends Component<Props> {
  render() {
    return (
      <div style={styles.sliderWrapper}>
        <Slider
          dots
          lazyLoad="progressive"
          infinite={false}
          focusOnSelect={false}
          slidesPerRow={1}
          slidesToShow={1}
          speed={100}
        >
          {this.generateImages()}
        </Slider>
      </div>
    );
  }

  protected generateImages() {
    return this.props.fileUrls.map(content => {
      return (
        <div>
          <img alt="post" src={content} style={this.getImageStlye()} />
        </div>
      );
    });
  }

  protected getImageStlye(): any {
    return { ...styles.imageDefaultStyle, height: this.props.height };
  }
}

const styles = {
  imageDefaultStyle: {
    minHeight: "100%",
    minWidth: "100%",
    objectFit: "cover"
  },
  sliderWrapper: {
    width: "100%"
  }
};
