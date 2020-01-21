import React, { Component } from "react";

interface Props {
  style?: any;
}

export default class H4 extends Component<Props> {
  render() {
    return (
      <h4 style={this.props.style ? this.props.style : styles.textStyle}>
        {this.props.children}
      </h4>
    );
  }
}

const styles = {
  textStyle: {
    margin: 0
  }
};
