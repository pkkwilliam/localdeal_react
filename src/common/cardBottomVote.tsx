import ApplicationComponent from "./applicationComponent";
import React from "react";
import { View } from ".";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import { styleSchema } from "./stylesheet";

export interface Props {
  downVoteCount: number;
  onClickDownVote: () => void;
  onClickUpVote: () => void;
  upVoteCount: number;
}

export interface State {}

export default class CardBottomVote extends ApplicationComponent<Props> {
  render() {
    return (
      <View isFlexDirectionRow>
        <ThumbUp style={styles.icon} />
        <ThumbDown style={styles.icon} />
      </View>
    );
  }
}

const styles = {
  icon: {
    backgroundColor: styleSchema.color.blueTransparent,
    color: styleSchema.color.primaryColor
  }
};
