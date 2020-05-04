import React, { Component } from "react";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Menu from "@material-ui/icons/Menu";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Room from "@material-ui/icons/Room";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { styleSchema } from "./stylesheet";
import { Tooltip } from "@material-ui/core";

interface Props {
  onClick?: () => void;
  toolTipsMessage?: string;
  type:
    | "add"
    | "close"
    | "expandMore"
    | "expandLess"
    | "favroite"
    | "favroiteBorder"
    | "location"
    | "menu"
    | "post"
    | "verified";
}

export default class Icon extends Component<Props> {
  render() {
    const icon = this.getIcon(this.props.type);
    if (this.props.toolTipsMessage) {
      return (
        <Tooltip disableTouchListener title={this.props.toolTipsMessage}>
          <div>{icon}</div>
        </Tooltip>
      );
    } else {
      return icon;
    }
  }

  CloseIcon = () => {
    return <Close onClick={this.props.onClick} style={styles.close} />;
  };

  AddIcon = () => {
    return <Add onClick={this.props.onClick} style={styles.add} />;
  };

  ExpandLessIcon = () => {
    return <ExpandLess onClick={this.props.onClick} style={styles.expand} />;
  };

  ExpandMoreIcon = () => {
    return <ExpandMore onClick={this.props.onClick} style={styles.expand} />;
  };

  FavoriteBorderIcon = () => {
    return (
      <FavoriteBorderIcon
        onClick={this.props.onClick}
        style={styles.favorite}
      />
    );
  };

  FavoriteIcon = () => {
    return (
      <FavoriteIcon onClick={this.props.onClick} style={styles.favorite} />
    );
  };

  LocationIcon = () => {
    return <Room style={styles.location} />;
  };

  MenuIcon = () => {
    return <Menu onClick={this.props.onClick} style={styles.menu} />;
  };

  PostIcon = () => {
    return <PhotoLibraryIcon />;
  };

  VerifiedIcon = () => {
    return <VerifiedUserIcon style={styles.verified} />;
  };

  public getIcon(type: string) {
    switch (type) {
      case "add":
        return <this.AddIcon />;
      case "close":
        return <this.CloseIcon />;
      case "expandLess":
        return <this.ExpandLessIcon />;
      case "expandMore":
        return <this.ExpandMoreIcon />;
      case "favroite":
        return <this.FavoriteIcon />;
      case "favroiteBorder":
        return <this.FavoriteBorderIcon />;
      case "location":
        return <this.LocationIcon />;
      case "menu":
        return <this.MenuIcon />;
      case "post":
        return <this.PostIcon />;
      case "verified":
        return <this.VerifiedIcon />;
    }
  }
}

const styles = {
  add: {
    color: styleSchema.color.primaryColor,
    ...styleSchema.icon,
  },
  close: {
    color: styleSchema.color.greyDark,
  },
  expand: {
    color: styleSchema.color.primaryColor,
    marginLeft: 10,
  },
  favorite: {
    color: styleSchema.color.red,
    fontSize: 20,
  },
  location: {
    color: styleSchema.color.greenMedium,
    ...styleSchema.icon,
  },
  menu: {
    color: styleSchema.color.greyDark,
    ...styleSchema.icon,
  },
  verified: {
    color: styleSchema.color.green,
    fontSize: 20,
  },
};
