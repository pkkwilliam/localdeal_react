// button
const borderRadius = 15;

// color
const BLUE = "#78C5EF";
const GREEN = "#5CC928";
const LIGHT_GREY = "#7D7D7D";
const WHITE = "#FFFFFF";

// font
const FONT_SIZE = 16;

export interface StyleSheet {
  button: {
    borderRadius: number;
  };
  color: {
    primaryColor: string;
    secondaryColor: string;
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
    primaryColor: BLUE,
    secondaryColor: LIGHT_GREY
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
