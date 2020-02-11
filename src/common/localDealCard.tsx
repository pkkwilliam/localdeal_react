import React, { Component, ReactNode } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Collapse } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { View } from ".";
import { styleSchema } from "./stylesheet";

export interface Props {
  bottomToolBar?: React.ReactNode;
  collapsedHeight?: number;
  contents: React.ReactNode;
  onClick: (any?: any) => void;
  title?: string;
}

export interface State {
  height: number;
  isCollapsed: boolean;
}

export default class LocalDealCard extends Component<Props, State> {
  private contentRef: HTMLDivElement | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      height: 0,
      isCollapsed: true
    };
  }

  componentDidMount() {
    this.setState({
      height: this.contentRef?.clientHeight ?? 0
    });
  }

  render() {
    return (
      <View borderBottom={1} style={styles.rootContainer}>
        <this.ContentBody
          content={this.props.contents}
          height={this.state.height}
          isCollapsed={this.state.isCollapsed}
        />
        <View>{this.props.bottomToolBar}</View>
      </View>
    );
  }

  protected ContentBody = ({
    content,
    height,
    isCollapsed
  }: {
    content: ReactNode;
    height: number;
    isCollapsed: boolean;
  }) => {
    const style =
      height < 180 || !isCollapsed
        ? styles.contentOpenedStyle
        : styles.contentCollapsedStyle;
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

  // render() {
  //   let { collapsedHeight, contents } = this.props;
  //   return (
  //     <View
  //       borderBottom={5}
  //       style={styles.rootContainer}
  //       onClick={this.onClickedContent}
  //     >
  //       <Collapse
  //         style={styles.collapseComponentStyle}
  //         in={this.state.isCollapsed}
  //         collapsedHeight={
  //           collapsedHeight
  //             ? collapsedHeight
  //             : this.getCollapseHeight(this.state.height)
  //         }
  //       >
  //         <Card>
  //           <CardContent onClick={() => this.onClickedContent()}>
  //             <div
  //               ref={viewRef => {
  //                 this.ref = viewRef;
  //               }}
  //             >
  //               {contents}
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </Collapse>
  //     </View>
  //   );
  // }

  // protected getCollapseHeight = (contentHeight: number): number => {
  //   return contentHeight < 180 ? contentHeight + 42 : 180;
  // };

  protected onClickedContent = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };
}

const styles = {
  bottonToolBar: {
    alightItem: "flex-end",
    justifyContent: "space-between"
  },
  contentCollapsedStyle: {
    height: "150px",
    overflow: "hidden"
  },
  contentContainer: {
    width: styleSchema.dimension.FILL_ALL_WIDTH
  },
  contentOpenedStyle: {},
  rootContainer: {
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.color.lightGrey,
    padding: 20,
    width: styleSchema.dimension.FILL_ALL_WIDTH
  }
};
