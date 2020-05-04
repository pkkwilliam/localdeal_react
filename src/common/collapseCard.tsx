import React from "react";
import View from "./view";
import { styleSchema } from "./stylesheet";
import Collapse from "@material-ui/core/Collapse";
import ApplicationComponent from "./applicationComponent";
import Icon from "./icon";

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
        {this.props.bottomToolBarContent}
        <this.ExpandSign />
      </View>
    );
  };

  protected ExpandSign = () => {
    if (this.props.allowExpand) {
      return this.props.expanded ? (
        <Icon onClick={this.props.onClickExpandSign} type="expandLess" />
      ) : (
        <Icon onClick={this.props.onClickExpandSign} type="expandMore" />
      );
    } else {
      return null;
    }
  };
}

const styles = {
  bottonToolBar: {
    justifyContent: "space-between",
    marginTop: 10,
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
  },
  rootContainer: {
    width: "inherit",
  },
};
