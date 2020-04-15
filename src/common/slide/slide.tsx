import React, { Component } from "react";
import Slider from "react-slick";
import "./slide.css";

interface Props {
  dots: boolean;
  dealIndex: number;
  fileUrls: string[];
  swipe: boolean;
}

interface State {
  imageHeight?: number;
}

export default class Slide extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.sliderWrapper}>
        <Slider
          dots={this.props.dots}
          lazyLoad="progressive"
          infinite={false}
          focusOnSelect={false}
          slidesPerRow={1}
          slidesToShow={1}
          swipe={this.props.swipe}
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
            id={`deal-${this.props.dealIndex} image-${index}`}
            onLoad={() => this.onLoadImage(index)}
            src={content}
            style={this.getImageStlye()}
          />
        </div>
      );
    });
  }

  protected getImageStlye(): any {
    if (this.state.imageHeight) {
      return { ...styles.imageDefaultStyle, height: this.state.imageHeight };
    } else {
      return { ...styles.imageDefaultStyle };
    }
  }

  protected onLoadImage = (index: number) => {
    if (index === 0) {
      const height = document.getElementById(
        `deal-${this.props.dealIndex} image-0`
      )?.clientHeight;
      if (height) {
        console.log(height);
        this.setState({
          imageHeight: height,
        });
      }
    }
  };
}

const styles = {
  imageDefaultStyle: {
    minHeight: "100%",
    minWidth: "100%",
    objectFit: "cover",
  },
  sliderWrapper: {
    width: "100%",
  },
};
