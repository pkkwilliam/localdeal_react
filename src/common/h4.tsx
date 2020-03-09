import { H1, styleSchema } from ".";

export default class H4 extends H1 {
  protected getDefaultColor(): string {
    return styleSchema.color.primaryColor;
  }
}
