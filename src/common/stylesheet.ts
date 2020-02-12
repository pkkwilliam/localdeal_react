// button
const borderRadius = 15;

// color
const BLACK = "black"; // TODO replace this with HEX code
const BLUE = "#007AFF";
const BLUE_TRANSPARENT = "rgba(0,132,255,.1)";
const DARK_GREY = "#7D7D7D";
const GREEN = "#5CC928";
const LIGHT_GREY = "#f6f6f6";
const WHITE = "#FFFFFF";

// dimension
const FILL_ALL_WIDTH = "-webkit-fill-available";

// font
const FONT_SIZE = 16;

export interface StyleSheet {
  button: {
    borderRadius: number;
  };
  color: {
    black: string;
    blueTransparent: string;
    lightGrey: string;
    primaryColor: string;
    secondaryColor: string;
    white: string;
  };
  dimension: {
    FILL_ALL_WIDTH: string;
  };
  font: {
    fontSize: number;
    white: string;
  };
  remind: {
    primaryColor: string;
    secondaryColor: string;
  };
  textField: {
    borderColor: string;
    borderRadius: number;
    borderWidth: number;
  };
}

export const styleSchema: StyleSheet = {
  button: {
    borderRadius
  },
  color: {
    black: BLACK,
    blueTransparent: BLUE_TRANSPARENT,
    primaryColor: BLUE,
    secondaryColor: DARK_GREY,
    lightGrey: LIGHT_GREY,
    white: WHITE
  },
  dimension: {
    FILL_ALL_WIDTH
  },
  font: {
    fontSize: FONT_SIZE,
    white: WHITE
  },
  remind: {
    primaryColor: GREEN,
    secondaryColor: BLUE
  },
  textField: {
    borderColor: BLUE,
    borderRadius,
    borderWidth: 2
  }
};
