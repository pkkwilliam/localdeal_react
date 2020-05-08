import TextField from "./textField";
import React from "react";
import { default as MaterialTextField } from "@material-ui/core/TextField";

export default class OutlinedTextField extends TextField {
  render() {
    return (
      <MaterialTextField
        label={this.props.label}
        multiline={this.props.multiline}
        onChange={(event) => this.props.onChange(event.target.value)}
        placeholder={this.props.placeholder}
        rows={this.props.rows}
        size="small"
        style={styles.textfield}
        value={this.props.value}
        variant="outlined"
      />
    );
  }
}

const styles = {
  textfield: {
    marginTop: 10,
    width: "inherit",
  },
};
