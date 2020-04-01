import React, { Component } from "react";
import Slider from "react-slick";
import "./slide.css";

interface Props {
  dealIndex: number;
  height: number;
  fileUrls: string[];
}

interface State {
  contentHeight: number;
  imageLoaded: boolean;
}

const MAXIMUM_IMAGE_HEIGHT = 500;

export default class Slide extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      contentHeight: 100,
      imageLoaded: false
    };
  }

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
    return this.props.fileUrls.map((content, index) => {
      return (
        <div>
          <img
            alt="post"
            onLoad={() => this.onLoadImage(index)}
            id={`deal-${this.props.dealIndex} image-${index}`}
            src={content}
            style={this.getImageStlye()}
          />
        </div>
      );
    });
  }

  protected getImageStlye(): any {
    // return this.state.imageLoaded
    //   ? { ...styles.imageDefaultStyle, height: this.state.contentHeight }
    //   : styles.imageDefaultStyle;
    return { ...styles.imageDefaultStyle, height: this.props.height };
  }

  protected onLoadImage = (index: number) => {
    if (index === 0) {
      let height = document.getElementById(
        `deal-${this.props.dealIndex} image-0`
      )?.clientHeight;
      if (height && height > MAXIMUM_IMAGE_HEIGHT) {
        console.debug("exceed maximum height:", height);
        height = MAXIMUM_IMAGE_HEIGHT;
      }
      if (height) {
        this.setState({
          contentHeight: height,
          imageLoaded: true
        });
      }
    }
  };
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
