import React, { ReactNode } from "react";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { View, H4, H5 } from ".";
import { styleSchema } from "./stylesheet";
import { Button } from "@material-ui/core";
import ApplicationComponent from "./applicationComponent";

export interface Props {
  children?: React.ReactNode;
  collapsedHeight?: number;
  contents: React.ReactNode;
  onClick: (any?: any) => void;
  title?: string;
}

export interface State {
  contentNeedCollapse: boolean;
  isCollapsed: boolean;
}

export default class LocalDealCard extends ApplicationComponent<Props, State> {
  private contentRef: HTMLDivElement | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      contentNeedCollapse: true,
      isCollapsed: true
    };
  }

  componentDidMount() {
    this.setState({
      contentNeedCollapse: (this.contentRef?.clientHeight ?? 0) > 180
    });
  }

  render() {
    return (
      <View borderBottom={1} style={styles.rootContainer}>
        <this.ContentBody
          content={this.props.contents}
          contentNeedCollapse={this.state.contentNeedCollapse}
          isCollapsed={this.state.isCollapsed}
        />
        <this.BottomToolBar />
      </View>
    );
  }

  protected BottomToolBar = () => {
    return (
      <View isFlexDirectionRow style={styles.bottonToolBar}>
        <View style={{ alignSelf: "flex-start" }}>{this.props.children}</View>
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
    if (this.state.contentNeedCollapse) {
      return (
        <Button onClick={this.onClickedContent} style={styles.expandSignButton}>
          {this.state.isCollapsed ? (
            <this.ExpandMoreSign />
          ) : (
            <this.ExpandLessSign />
          )}
        </Button>
      );
    } else {
      return null;
    }
  };

  protected ContentBody = ({
    content,
    contentNeedCollapse,
    isCollapsed
  }: {
    content: ReactNode;
    contentNeedCollapse: boolean;
    isCollapsed: boolean;
  }) => {
    const style =
      contentNeedCollapse && isCollapsed
        ? styles.contentCollapsedStyle
        : styles.contentOpenedStyle;
    return (
      <View
        style={{ ...styles.contentContainer, ...style }}
        onClick={this.onClickedContent}
      >
        <div
          // TODO not sure if this is correct
          style={{ width: "inherit" }}
          ref={contentRef => {
            this.contentRef = contentRef;
          }}
        >
          {content}
        </div>
      </View>
    );
  };

  protected onClickedContent = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };
}

const styles = {
  bottonToolBar: {
    justifyContent: "space-between",
    width: "inherit"
  },
  contentCollapsedStyle: {
    height: "150px",
    overflow: "hidden"
  },
  contentContainer: {
    width: styleSchema.dimension.FILL_ALL_WIDTH
  },
  contentOpenedStyle: {},
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
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.common.borderColor,
    padding: 20,
    width: styleSchema.dimension.FILL_ALL_WIDTH
  }
};
