import React, { Component } from "react";
import { Tooltip, Button } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default class ToolTips extends Component<Props> {
  render() {
    return (
      <Tooltip disableTouchListener title={this.props.title}>
        <Button style={{ padding: 0, minWidth: 0 }}>
          {this.props.children}
        </Button>
      </Tooltip>
    );
  }
}
