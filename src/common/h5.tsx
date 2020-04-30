import H1 from "./h1";
import { styleSchema } from "./stylesheet";

export default class H5 extends H1 {
  protected getColor(): string {
    return styleSchema.color.greyDark;
  }

  protected getStyle() {
    return {
      fontSize: 15,
      fontWeight: 500,
    };
  }
}
