import React from "react";
import ApplicationComponent from "./applicationComponent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import { styleSchema } from "./";
import { StyleSheet } from "./stylesheet";

const overrideStyles = (style: StyleSheet) => {
  let textFieldStyles = style.textField;
  return {
    notchedOutline: {
      borderColor: textFieldStyles.borderColor,
      borderRadius: textFieldStyles.borderRadius,
      borderWidth: textFieldStyles.borderWidth
    }
  };
};

export interface Props {
  classes?: any;
  children?: React.ReactNode;
  defaultValue?: string;
  onBlur?: () => void;
  onChange: (textInput: any) => void;
  onFocus?: () => void;
  text: string;
  style?: any;
}

class LocalDealTextField extends ApplicationComponent<Props> {
  render() {
    let onBlurFunction = this.props.onBlur ? this.props.onBlur : () => {};
    let onFocusFunction = this.props.onFocus ? this.props.onFocus : () => {};
    return (
      <TextField
        defaultValue={this.props.defaultValue}
        InputProps={{
          classes: {
            notchedOutline: this.props.classes.notchedOutline
          }
        }}
        label={this.props.text}
        onBlur={() => onBlurFunction()}
        onChange={text => this.props.onChange(text.target.value)}
        onFocus={() => onFocusFunction()}
        style={{ ...styles.textFieldStyle, ...this.props.style }}
        variant="outlined"
      >
        {this.props.children}
      </TextField>
    );
  }
}

const styles = {
  textFieldStyle: {
    width: "inherit"
  }
};

export default withStyles(overrideStyles(styleSchema))(LocalDealTextField);
