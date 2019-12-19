import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { CardHeader, CardContent } from "@material-ui/core";

export interface Props {
  contents: React.ReactNode;
  onClick: (any?: any) => void;
  title?: string;
}

export default class LocalDealCard extends Component<Props> {
  render() {
    let { contents, onClick } = this.props;
    return (
      <Card style={styles.cardContainer}>
        <CardContent onClick={() => onClick()}>{contents}</CardContent>
      </Card>
    );
  }
}

const styles = {
  cardContainer: {
    margin: 20
  }
};
