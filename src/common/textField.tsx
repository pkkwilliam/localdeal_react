import React, { Component } from "react";
import { default as MaterialTextField } from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { styleSchema } from "./stylesheet";

const overrideStyles = {
  root: {
    "& label.Mui-focused": {
      color: "yellow",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
      borderWidth: "0px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
        borderWidth: "0px",
      },
    },
  },
};

interface Props {
  label?: string;
  multiline?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  value?: string;
}

export default class TextField extends Component<Props> {
  render() {
    const StyledTextField = withStyles(overrideStyles)(MaterialTextField);
    return (
      <MaterialTextField
        multiline={this.props.multiline}
        onChange={(event) => this.props.onChange(event.target.value)}
        placeholder={this.props.placeholder}
        rows={this.props.rows}
        style={styles.textField}
        value={this.props.value}
      />
    );
  }
}

const styles = {
  textField: {
    width: styleSchema.dimension.FILL_ALL_WIDTH,
  },
};
