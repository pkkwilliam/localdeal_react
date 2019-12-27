import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Collapse } from "@material-ui/core";
import { View } from ".";

export interface Props {
  collapsedHeight?: number;
  contents: React.ReactNode;
  onClick: (any?: any) => void;
  title?: string;
}

export interface State {
  isCollapsed: boolean;
}

export default class LocalDealCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isCollapsed: false
    };
  }

  render() {
    let { collapsedHeight, contents } = this.props;
    return (
      <Collapse
        in={this.state.isCollapsed}
        collapsedHeight={collapsedHeight ? collapsedHeight : 80}
      >
        <Card style={styles.cardContainer}>
          <CardContent onClick={() => this.onClickedContent()}>
            {contents}
          </CardContent>
        </Card>
      </Collapse>
    );
  }

  onClickedContent = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };
}

const styles = {
  cardContainer: {
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 5,
    marginTop: 5
  }
};
