import PrimaryButton from "./primaryButton";
import { ButtonProps } from "@material-ui/core/Button";
import { styleSchema } from "./stylesheet";

interface Props extends ButtonProps {
  buttonType: "primary" | "secondary";
}

export default class SecondaryButton extends PrimaryButton<Props> {
  public getButtonStyle() {
    const backgroundColor =
      this.props.buttonType === "primary" ? styleSchema.color.primaryColor : "";
    return { backgroundColor, borderRadius: 6, marginTop: 10, width: "" };
  }

  public getTextStyle() {
    const color =
      this.props.buttonType === "primary"
        ? styleSchema.color.white
        : styleSchema.color.primaryColor;
    return { color, fontSize: 14, fontWeight: 500 };
  }
}
