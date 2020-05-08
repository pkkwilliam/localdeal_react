import H1 from "./h1";
import { styleSchema } from "./stylesheet";

export default class H5 extends H1 {
  protected getStyle() {
    return {
      fontSize: 15,
      fontWeight: 500,
    };
  }

  public getDefaultColor() {
    return styleSchema.color.secondaryColor;
  }
}
