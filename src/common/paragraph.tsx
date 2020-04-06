import H1 from "./h1";
import { styleSchema } from "./stylesheet";
import { Props as ParentProps } from "./h1";

interface Props extends ParentProps {
  color?: "primary" | "secondary" | "black";
}

export default class Paragraph extends H1<Props> {
  protected getColor(): string {
    switch (this.props.color) {
      case "primary":
        return styles.primaryColor.color;
      case "secondary":
        return styles.secondaryColor.color;
      case "black":
        return styles.black.color;
      default:
        return styles.primaryColor.color;
    }
  }

  protected getStyle(): any {
    return styles.text;
  }
}

const styles = {
  primaryColor: {
    color: styleSchema.color.primaryColor,
  },
  secondaryColor: {
    color: styleSchema.color.secondaryColor,
  },
  black: {
    color: styleSchema.color.black,
  },
  text: {
    fontFamily: styleSchema.font.primaryFont,
    fontSize: "0.875rem",
  },
};
