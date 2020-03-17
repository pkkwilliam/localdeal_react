import { H1, styleSchema } from ".";

export default class H4 extends H1 {
  protected getColor(): string {
    return styleSchema.color.primaryColor;
  }

  protected getStyle(): any {
    return styles.text;
  }
}

const styles = {
  text: {
    fontSize: 15,
    fontWeight: 500
  }
};
