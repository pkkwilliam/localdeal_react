import React, { Component } from "react";
import Slider from "react-slick";

interface Props {
  dealIndex: number;
  contentArray: string[];
}

interface State {
  contentHeight: number;
  imageLoaded: boolean;
}

export default class Slide extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      contentHeight: 250,
      imageLoaded: false
    };
  }

  componentDidMount() {
    console.log("current content height and index:", this.state.contentHeight);
  }

  render() {
    return (
      <div style={styles.sliderWrapper}>
        <Slider
          dots
          lazyLoad="progressive"
          infinite={false}
          slidesPerRow={1}
          slidesToShow={1}
          speed={300}
        >
          {this.generateImages()}
        </Slider>
      </div>
    );
  }

  protected generateImages() {
    return this.props.contentArray.map((content, index) => {
      return (
        <div>
          <img
            alt="post"
            onLoad={this.onLoadImage}
            id={`deal-${this.props.dealIndex} image-${index}`}
            src={content}
            style={this.getImageStlye()}
          />
        </div>
      );
    });
  }

  protected getImageStlye(): any {
    return this.state.imageLoaded
      ? { ...styles.imageDefaultStyle, height: this.state.contentHeight }
      : styles.imageDefaultStyle;
  }

  protected onLoadImage = () => {
    const height = document.getElementById(
      `deal-${this.props.dealIndex} image-0`
    )?.clientHeight;
    if (height) {
      this.setState({
        contentHeight: height,
        imageLoaded: true
      });
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
