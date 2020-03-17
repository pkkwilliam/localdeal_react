import React, { Component } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { styleSchema } from "./stylesheet";

interface Props extends ButtonProps {
  text: string;
  onClick: () => void;
}

export default class TextButton extends Component<Props> {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        style={styles.buttonStyle}
        variant="text"
        {...this.props}
      >
        {this.props.text}
        {this.props.children}
      </Button>
    );
  }
}

const styles = {
  buttonStyle: {
    color: styleSchema.color.primaryColor,
    paddingBottom: 2,
    paddingTop: 2
  }
};
