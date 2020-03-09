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
const GREEN_MDEIUM = "#1EA362";
const ORANGE = "#FF4F00";
const ORANGE_TRANSPARENT = "rgb(255, 168, 128, .1)";
const RED = "red";
const RED_DARK = "#DA4B3C";
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
    green: string;
    greenMedium: string;
    greyDark: string;
    greyLight: string;
    greyTransparent: string;
    orange: string;
    orangeTransparent: string;
    primaryColor: string;
    primaryColorTransparent: string;
    red: string;
    redDark: string;
    secondaryColor: string;
    secondaryColorTransparent: string;
    white: string;
  };
  common: {
    borderColor: string;
  };
  dimension: {
    FILL_ALL_WIDTH: string;
  };
  font: {
    fontSize: number;
    white: string;
  };
  icon: any;
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
    green: GREEN,
    greenMedium: GREEN_MDEIUM,
    greyDark: GREY_DARK,
    greyLight: GREY_LIGHT,
    greyTransparent: GREY_TRANSPARENT,
    orange: ORANGE,
    orangeTransparent: ORANGE_TRANSPARENT,
    primaryColor: ORANGE,
    primaryColorTransparent: ORANGE_TRANSPARENT,
    red: RED,
    redDark: RED_DARK,
    secondaryColor: GREY_DARK,
    secondaryColorTransparent: GREY_TRANSPARENT,
    white: WHITE
  },
  common: {
    borderColor: GREY_LIGHT
  },
  dimension: {
    FILL_ALL_WIDTH
  },
  font: {
    fontSize: FONT_SIZE,
    white: WHITE
  },
  icon: {
    fontSize: 38,
    marginLeft: 18
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
