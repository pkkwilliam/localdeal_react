import H1 from "./h1";

export default class H4 extends H1 {
  protected getStyle(): any {
    return styles.text;
  }
}

const styles = {
  text: {
    fontSize: 15,
    fontWeight: 500,
  },
};
