// button
const borderRadius = 15;

// color
const BLACK = "black"; // TODO replace this with HEX code
const BLUE = "#007AFF";
const BLUE_TRANSPARENT = "rgba(0,132,255,.1)";
const GREY_DARK = "#7D7D7D";
const GREY_LIGHT = "#f6f6f6";
const GREY_TRANSPARENT = "rgba(12, 12, 12, .1)";
const GREEN = "#5CC928";
const RED = "red";
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
    greyDark: string;
    greyLight: string;
    greyTransparent: string;
    primaryColor: string;
    red: string;
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
    greyDark: GREY_DARK,
    greyLight: GREY_LIGHT,
    greyTransparent: GREY_TRANSPARENT,
    primaryColor: BLUE,
    red: RED,
    secondaryColor: GREY_DARK,
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
