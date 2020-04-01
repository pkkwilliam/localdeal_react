import React from "react";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { View, H4, H5 } from ".";
import { styleSchema } from "./stylesheet";
import { Button, Collapse } from "@material-ui/core";
import ApplicationComponent from "./applicationComponent";

export interface Props {
  children?: React.ReactNode;
  bottomToolBarContent?: React.ReactNode;
  expanded: boolean;
  onClickExpandSign: () => void;
}

export default class LocalDealCard extends ApplicationComponent<Props> {
  render() {
    return (
      <View style={{ ...styles.rootContainer, textAlign: "start" }}>
        <Collapse in={this.props.expanded}>
          <View style={styles.collapsedContentContainer}>
            {this.props.children}
          </View>
        </Collapse>
        <this.BottomToolBar />
      </View>
    );
  }

  protected BottomToolBar = () => {
    return (
      <View isFlexDirectionRow style={styles.bottonToolBar}>
        <View style={{ alignSelf: "flex-start" }}>
          {this.props.bottomToolBarContent}
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <this.ExpandSign />
        </View>
      </View>
    );
  };

  protected ExpandLessSign = () => {
    return (
      <>
        <H5 style={{ color: styleSchema.color.primaryColor }}>
          {this.appContext.labels.localDealCardPage.collapse}
        </H5>
        <ExpandLess style={styles.expandSignIcon} />
      </>
    );
  };

  protected ExpandMoreSign = () => {
    return (
      <>
        <H4>{this.appContext.labels.localDealCardPage.expand}</H4>
        <ExpandMore style={styles.expandSignIcon} />
      </>
    );
  };

  protected ExpandSign = () => {
    return (
      <Button
        onClick={this.props.onClickExpandSign}
        style={styles.expandSignButton}
      >
        {this.props.expanded ? (
          <this.ExpandLessSign />
        ) : (
          <this.ExpandMoreSign />
        )}
      </Button>
    );
  };
}

const styles = {
  bottonToolBar: {
    justifyContent: "space-between",
    width: "inherit"
  },
  collapsedContentContainer: {
    paddingBottom: 15,
    paddingTop: 15
  },
  expandSignButton: {
    backgroundColor: styleSchema.color.primaryColorTransparent,
    padding: 0,
    paddingLeft: 15,
    paddingRight: 5
  },
  expandSignIcon: {
    color: styleSchema.color.primaryColor
  },
  rootContainer: {
    width: "inherit"
  }
};
