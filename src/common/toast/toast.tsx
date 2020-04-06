import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import View from "../view";
import P from "../paragraph";
import { styleSchema } from "../stylesheet";
import { ToastSeverity } from "./toastSeverity";

interface Props {
  autoHideDuration?: number;
  message: string;
  onClose: () => void;
  open: boolean;
  severity?: ToastSeverity;
}

interface State {
  open: boolean;
}

export default class Toast extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  protected TransitionUp(props: any) {
    return <Slide {...props} direction="up" />;
  }

  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        TransitionComponent={this.TransitionUp}
        open={this.props.open}
        autoHideDuration={
          this.props.autoHideDuration ? this.props.autoHideDuration : 2500
        }
        onClose={this.props.onClose}
      >
        <View
          boxShadow={1}
          style={{
            ...styles.rootContainer,
            backgroundColor: this.getBackgroundColor(),
          }}
        >
          <P style={{ color: "white" }}>{this.props.message}</P>
        </View>
      </Snackbar>
    );
  }

  protected getBackgroundColor() {
    switch (this.props.severity) {
      case ToastSeverity.ERROR:
        return styleSchema.color.systemError;
      case ToastSeverity.INFORM:
        return styleSchema.color.systemInform;
      case ToastSeverity.SUCCESS:
        return styleSchema.color.systemSuccess;
      case ToastSeverity.WARN:
        return styleSchema.color.systemWarn;
      default:
        return styleSchema.color.systemInform;
    }
  }
}

const styles = {
  rootContainer: {
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    marginBottom: 35,
  },
};
