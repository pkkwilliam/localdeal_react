import React from "react";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import View from "./view";
import H4 from "./h4";
import H5 from "./h5";
import { styleSchema } from "./stylesheet";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import ApplicationComponent from "./applicationComponent";

export interface Props {
  allowExpand: boolean;
  children?: React.ReactNode;
  bottomToolBarContent?: React.ReactNode;
  expanded: boolean;
  onClickExpandSign: () => void;
}

export default class CollapseCard extends ApplicationComponent<Props> {
  render() {
    return (
      <View style={{ ...styles.rootContainer, textAlign: "start" }}>
        <Collapse in={this.props.expanded}>
          <View
            style={
              this.props.allowExpand
                ? styles.collapsedContentContainer
                : styles.empty
            }
          >
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
    if (this.props.allowExpand) {
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
    } else {
      return null;
    }
  };
}

const styles = {
  bottonToolBar: {
    justifyContent: "space-between",
    width: "inherit",
  },
  collapsedContentContainer: {
    paddingBottom: 15,
    paddingTop: 15,
  },
  empty: {},
  expandSignButton: {
    backgroundColor: styleSchema.color.primaryColorTransparent,
    padding: 0,
    paddingLeft: 15,
    paddingRight: 5,
  },
  expandSignIcon: {
    color: styleSchema.color.primaryColor,
  },
  rootContainer: {
    width: "inherit",
  },
};
