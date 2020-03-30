import React, { Component } from "react";
import { TextField as MaterialTextField, withStyles } from "@material-ui/core";

const overrideStyles = {
  root: {
    "& label.Mui-focused": {
      color: "yellow"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
      borderWidth: "0px"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
        borderWidth: "0px"
      }
    }
  }
};

interface Props {
  multiline?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export default class TextField extends Component<Props> {
  render() {
    const StyledTextField = withStyles(overrideStyles)(MaterialTextField);
    return (
      <StyledTextField
        multiline={this.props.multiline}
        onChange={event =>
          this.props.onChange
            ? this.props.onChange(event.target.value)
            : () => {}
        }
        placeholder={this.props.placeholder}
        rows={this.props.rows}
        style={styles.textField}
      />
    );
  }
}

const styles = {
  textField: {
    width: "inherit"
  }
};
