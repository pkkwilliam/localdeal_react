import H1 from "./h1";
import { styleSchema } from "./stylesheet";

export default class Paragraph extends H1 {
  protected getStyle(): any {
    return styles.text;
  }
}

const styles = {
  text: {
    fontFamily: styleSchema.font.primaryFont,
    fontSize: "0.875rem",
  },
};
