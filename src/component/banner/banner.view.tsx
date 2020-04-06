import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import View from "../../common/view";
import P from "../../common/paragraph";
import { styleSchema } from "../../common/stylesheet";
import { AppBar, LinearProgress, makeStyles } from "@material-ui/core";

export default class BannerView extends ApplicationComponent {
  render() {
    const showBanner = this.appState.createDeal.uploading;
    if (showBanner) {
      return (
        <AppBar position={"sticky"} style={{ backgroundColor: "white" }}>
          <this.UploadProgress />
        </AppBar>
      );
    } else {
      return null;
    }
  }

  UploadProgress = () => {
    const classes = materialUIStyleOverride();
    return (
      <>
        <View style={styles.uploadObjectContainer}>
          <P color={"black"}>{this.appState.createDeal.progressMessage}</P>
        </View>
        <LinearProgress
          classes={{
            barColorPrimary: classes.barColorPrimary,
            colorPrimary: classes.colorPrimary,
          }}
          style={styles.linearProgressor}
        />
      </>
    );
  };
}

const styles = {
  linearProgressor: {
    color: "pink",
    width: "inherit",
  },
  uploadObjectContainer: {
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
};

const materialUIStyleOverride = makeStyles({
  barColorPrimary: {
    background: styleSchema.color.primaryGradient,
  },
  colorPrimary: {
    backgroundColor: styleSchema.color.primaryColorTransparent,
  },
});
