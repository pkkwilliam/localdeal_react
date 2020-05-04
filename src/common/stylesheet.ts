// button
const borderRadius = 15;

// color
const BLACK = "black"; // TODO replace this with HEX code
const BLUE = "#007AFF";
const BLUE_TRANSPARENT = "rgba(0,132,255,.1)";
const BLUE_TRANSPARENT_SEMI = "rgba(16, 137, 254,1)";
const GREY_DARK = "#7D7D7D";
const GREY_LIGHT = "#f6f6f6";
const GREY_TRANSPARENT = "rgba(12, 12, 12, .1)";
const GREEN = "#5CC928";
const GREEN_MDEIUM = "#1EA362";
const ORANGE = "#FF4F00";
const ORANGE_GRADIENT = "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)";
const ORANGE_TRANSPARENT = "rgb(255, 168, 128, .1)";
const RED = "EA4335";
const RED_DARK = "#DA4B3C";
const WHITE = "#FFFFFF";
const SYSTEM_ERROR = "#F44436";
const SYSTEM_INFORM = "#2196F3";
const SYSTEM_SUCCESS = "#4CAF51";
const SYSTEM_WARN = "#FF9800";

// dimension
const FILL_ALL_HEIGHT = "-webkit-fill-available";
const FILL_ALL_WIDTH = "-webkit-fill-available";

// font
const PRIMARY_FONT = "sans-serif";
const FONT_SIZE = 16;

export interface StyleSheet {
  button: {
    borderRadius: number;
  };
  color: {
    black: string;
    blueTransparent: string;
    blueTransparentSemi: string;
    green: string;
    greenMedium: string;
    greyDark: string;
    greyLight: string;
    greyTransparent: string;
    orange: string;
    orangeGradient: string;
    orangeTransparent: string;
    primaryColor: string;
    primaryGradient: string;
    primaryColorTransparent: string;
    red: string;
    redDark: string;
    secondaryColor: string;
    secondaryColorTransparent: string;
    systemError: string;
    systemInform: string;
    systemSuccess: string;
    systemWarn: string;
    white: string;
  };
  common: {
    borderColor: string;
  };
  dimension: {
    FILL_ALL_HEIGHT: string;
    FILL_ALL_WIDTH: string;
  };
  font: {
    fontSize: number;
    primaryFont: string;
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
    borderRadius,
  },
  color: {
    black: BLACK,
    blueTransparent: BLUE_TRANSPARENT,
    blueTransparentSemi: BLUE_TRANSPARENT_SEMI,
    green: GREEN,
    greenMedium: GREEN_MDEIUM,
    greyDark: GREY_DARK,
    greyLight: GREY_LIGHT,
    greyTransparent: GREY_TRANSPARENT,
    orange: ORANGE,
    orangeGradient: ORANGE_GRADIENT,
    orangeTransparent: ORANGE_TRANSPARENT,
    primaryColor: ORANGE,
    primaryGradient: ORANGE_GRADIENT,
    primaryColorTransparent: ORANGE_TRANSPARENT,
    red: RED,
    redDark: RED_DARK,
    secondaryColor: GREY_DARK,
    secondaryColorTransparent: GREY_TRANSPARENT,
    systemError: SYSTEM_ERROR,
    systemInform: SYSTEM_INFORM,
    systemSuccess: SYSTEM_SUCCESS,
    systemWarn: SYSTEM_WARN,
    white: WHITE,
  },
  common: {
    borderColor: GREY_LIGHT,
  },
  dimension: {
    FILL_ALL_HEIGHT,
    FILL_ALL_WIDTH,
  },
  font: {
    fontSize: FONT_SIZE,
    primaryFont: PRIMARY_FONT,
  },
  icon: {
    fontSize: 38,
    marginLeft: 18,
  },
  remind: {
    primaryColor: GREEN,
    secondaryColor: BLUE,
  },
  textField: {
    borderColor: BLUE,
    borderRadius,
    borderWidth: 2,
  },
};
