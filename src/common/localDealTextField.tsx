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

const styles = {
  textFieldStyle: {
    height: "100%",
    marginLeft: 10,
    marginRight: 10,
    width: "80%"
  }
};

export interface Props {
  classes?: any;
  children?: React.ReactNode;
  defaultValue?: string;
  onBlur?: () => void;
  onChange: (textInput: any) => void;
  onFocus?: () => void;
  text: string;
}

class LocalDealTextField extends ApplicationComponent<Props> {
  render() {
    let onBlurFunction = this.props.onBlur ? this.props.onBlur : () => {};
    let onFocusFunction = this.props.onFocus ? this.props.onFocus : () => {};
    return (
      <TextField
        InputProps={{
          classes: {
            notchedOutline: this.props.classes.notchedOutline
          }
        }}
        label={this.props.text}
        onBlur={() => onBlurFunction()}
        onChange={text => this.props.onChange(text.target.value)}
        onFocus={() => onFocusFunction()}
        style={styles.textFieldStyle}
        defaultValue={this.props.defaultValue}
        variant="outlined"
      >
        {this.props.children}
      </TextField>
    );
  }
}

export default withStyles(overrideStyles(styleSchema))(LocalDealTextField);
