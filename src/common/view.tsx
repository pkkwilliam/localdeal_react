import React from "react";
import ApplicationComponent from "./applicationComponent";
import { Box } from "@material-ui/core";

interface Props {
  alignItems?: string;
  chindren?: React.ReactNode;
  isFlexDirectionRow?: boolean;
  justifyContent?: string;
  onClick?: () => void;
  style?: any;
}

export default class View extends ApplicationComponent<Props> {
  render() {
    return (
      <Box
        display="flex"
        flexDirection={this.props.isFlexDirectionRow ? "row" : "column"}
        alignItems={this.props.alignItems ? this.props.alignItems : "start"}
        justifyContent={
          this.props.justifyContent ? this.props.justifyContent : "start"
        }
        onClick={() => (this.props.onClick ? this.props.onClick() : {})}
        style={this.props.style}
      >
        {this.props.children}
      </Box>
    );
  }
}
