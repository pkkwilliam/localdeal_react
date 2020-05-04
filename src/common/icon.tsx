import React, { Component } from "react";
import Close from "@material-ui/icons/Close";
import { styleSchema } from "./stylesheet";

interface Props {
  onClick?: () => void;
  type: "close" | "post";
}

export default class Icon extends Component<Props> {
  render() {
    return this.getIcon(this.props.type);
  }

  CloseIcon = () => {
    return <Close onClick={this.props.onClick} style={styles.close} />;
  };

  public getIcon(type: string) {
    switch (type) {
      case "close":
        return <this.CloseIcon />;
    }
  }
}

const styles = {
  close: {
    color: styleSchema.color.greyDark,
  },
};
