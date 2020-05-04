import React from "react";
import View from "./view";
import H5 from "./h5";
import { Message } from "../modal/message";
import { styleSchema } from "./stylesheet";
import Icon from "./icon";
import { Collapse } from "@material-ui/core";
import ApplicationComponent from "./applicationComponent";

interface Props {
  hide: boolean;
  messages: Message[];
  onClose: () => void;
}

export default class MessageBoard extends ApplicationComponent<Props> {
  render() {
    const messages = this.props.messages.map((message) =>
      this.generateMessages(message)
    );
    return (
      <Collapse in={!this.props.hide} style={styles.collapseContainer}>
        <View style={styles.rootContainer}>
          <View style={styles.closeIconContainer}>
            <Icon onClick={this.props.onClose} type="close" />
          </View>
          {messages}
        </View>
      </Collapse>
    );
  }

  protected generateMessages(message: Message) {
    let style = this.getStyle(message.type);
    return (
      <H5 color="white" style={{ ...style }}>
        {message.content}
      </H5>
    );
  }

  protected getStyle(type: string) {
    switch (type) {
      case "boldText":
        return styles.boldText;
      case "list":
        return styles.list;
      case "text":
        return styles.text;
      default:
        return styles.text;
    }
  }
}

const styles = {
  collapseContainer: { backgroundColor: styleSchema.color.greyLight },
  closeIconContainer: {
    alignItems: "flex-end",
    width: styleSchema.dimension.FILL_ALL_WIDTH,
  },
  rootContainer: {
    backgroundColor: styleSchema.color.blueTransparentSemi,
    borderRadius: 5,
    justifyContent: "center",
    margin: 15,
    marginBottom: 0,
    padding: 15,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 3,
  },
  defaultText: {},
  list: {},
  text: {},
};
