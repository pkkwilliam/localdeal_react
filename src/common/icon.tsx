import React, { Component } from "react";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Menu from "@material-ui/icons/Menu";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ReplyIcon from "@material-ui/icons/Reply";
import Room from "@material-ui/icons/Room";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { styleSchema } from "./stylesheet";
import Tooltip from "@material-ui/core/Tooltip";
import { Button, withStyles } from "@material-ui/core";

interface Props {
  onClick?: () => void;
  size?: "small" | "medium" | "large" | "xLarge";
  style?: any;
  toolTipsMessage?: string;
  type:
    | "add"
    | "addLarge"
    | "close"
    | "edit"
    | "expandMore"
    | "expandLess"
    | "favroite"
    | "favroiteBorder"
    | "folderOpen"
    | "helpOutline"
    | "location"
    | "menu"
    | "post"
    | "revert"
    | "verified";
}

export default class Icon extends Component<Props> {
  render() {
    const icon = this.getIcon(this.props.type);
    if (this.props.toolTipsMessage && this.props.children) {
      return (
        <Tooltip disableTouchListener title={this.props.toolTipsMessage}>
          <Button startIcon={icon} style={styles.buttonStyle}>
            {this.props.children}
          </Button>
        </Tooltip>
      );
    } else if (this.props.toolTipsMessage) {
      return (
        <Tooltip disableTouchListener title={this.props.toolTipsMessage}>
          <this.ButtonWrapper>{icon}</this.ButtonWrapper>
        </Tooltip>
      );
    } else {
      return <this.ButtonWrapper>{icon}</this.ButtonWrapper>;
    }
  }

  AddIcon = () => {
    return (
      <Add
        onClick={this.props.onClick}
        style={{ ...styles.add, ...this.props.style }}
      />
    );
  };

  AddLargeIcon = () => {
    return (
      <Add
        onClick={this.props.onClick}
        style={{ ...styles.addLarge, ...this.props.style }}
      />
    );
  };

  ButtonWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <StyledButton onClick={this.props.onClick} style={styles.buttonStyle}>
        {children}
      </StyledButton>
    );
  };

  CloseIcon = () => {
    return <Close onClick={this.props.onClick} style={styles.close} />;
  };

  EditIcon = () => {
    return <EditIcon onClick={this.props.onClick} style={styles.edit} />;
  };

  ExpandLessIcon = () => {
    return <ExpandLess onClick={this.props.onClick} style={styles.expand} />;
  };

  ExpandMoreIcon = () => {
    return <ExpandMore onClick={this.props.onClick} style={styles.expand} />;
  };

  FavoriteBorderIcon = () => {
    return <FavoriteBorderIcon style={styles.favorite} />;
  };

  FavoriteIcon = () => {
    return <FavoriteIcon style={styles.favorite} />;
  };

  FolderOpenIcon = () => {
    return (
      <FolderOpenIcon onClick={this.props.onClick} style={styles.folderOpen} />
    );
  };

  HelpOutlineIcon = () => {
    return <HelpOutlineIcon style={styles.helpOutline} />;
  };

  LocationIcon = () => {
    return <Room style={{ ...styles.location, ...this.props.style }} />;
  };

  MenuIcon = () => {
    return (
      <Menu
        onClick={this.props.onClick}
        style={{ ...styles.menu, ...this.props.style }}
      />
    );
  };

  PostIcon = () => {
    return <PhotoLibraryIcon style={styles.post} />;
  };

  ReplyIcon = () => {
    return <ReplyIcon onClick={this.props.onClick} style={styles.reply} />;
  };

  VerifiedIcon = () => {
    return <VerifiedUserIcon style={styles.verified} />;
  };

  public getIcon(type: string) {
    switch (type) {
      case "add":
        return <this.AddIcon />;
      case "addLarge":
        return <this.AddLargeIcon />;
      case "close":
        return <this.CloseIcon />;
      case "edit":
        return <this.EditIcon />;
      case "expandLess":
        return <this.ExpandLessIcon />;
      case "expandMore":
        return <this.ExpandMoreIcon />;
      case "favroite":
        return <this.FavoriteIcon />;
      case "favroiteBorder":
        return <this.FavoriteBorderIcon />;
      case "folderOpen":
        return <this.FolderOpenIcon />;
      case "helpOutline":
        return <this.HelpOutlineIcon />;
      case "location":
        return <this.LocationIcon />;
      case "menu":
        return <this.MenuIcon />;
      case "post":
        return <this.PostIcon />;
      case "revert":
        return <this.ReplyIcon />;
      case "verified":
        return <this.VerifiedIcon />;
    }
  }
}

const styles = {
  add: {
    color: styleSchema.color.primaryColor,
    fontSize: 38,
  },
  addLarge: {
    color: styleSchema.color.greyTransparent,
    fontSize: "80",
  },
  buttonStyle: {
    padding: 0,
  },
  close: {
    color: styleSchema.color.greyDark,
  },
  edit: {
    color: styleSchema.color.blueTransparentSemi,
  },
  expand: {
    color: styleSchema.color.primaryColor,
  },
  favorite: {
    color: styleSchema.color.red,
    fontSize: 20,
  },
  folderOpen: {
    backgroundColor: styleSchema.color.secondaryColorTransparent,
    borderRadius: 25,
    color: styleSchema.color.secondaryColor,
    fontSize: 16,
    marginBottom: 1,
    padding: 3,
  },
  helpOutline: {
    color: styleSchema.color.secondaryColor,
    fontSize: 18,
  },
  location: {
    color: styleSchema.color.greenMedium,
    fontSize: 38,
  },
  menu: {
    color: styleSchema.color.greyDark,
    fontSize: 38,
  },
  post: {
    color: styleSchema.color.blueTransparentSemi,
  },
  reply: {
    color: styleSchema.color.greyDark,
  },
  verified: {
    color: styleSchema.color.green,
    fontSize: 20,
  },
};

const StyledButton = withStyles({
  root: {
    minWidth: 0,
  },
})(Button);
