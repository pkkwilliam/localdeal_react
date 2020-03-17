import { styleSchema, H1 } from "./";

export default class H5 extends H1 {
  protected getColor(): string {
    return styleSchema.color.greyDark;
  }

  protected getStyle() {
    return styles.text;
  }
}

const styles = {
  text: {
    fontSize: 15,
    fontWeight: 500
  }
};
