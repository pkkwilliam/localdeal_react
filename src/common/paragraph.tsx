import { H1, styleSchema } from ".";

export default class Paragraph extends H1 {
  protected getColor(): string {
    return styleSchema.color.primaryColor;
  }

  protected getStyle(): any {
    return styles.text;
  }
}

const styles = {
  text: {
    fontFamily: styleSchema.font.primaryFont,
    fontSize: "0.875rem"
  }
};
