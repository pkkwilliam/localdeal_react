import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import MessageBoard from "../../common/messageBoard";

interface State {
  hideAnnouncement: boolean;
}

export default class Announcement extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hideAnnouncement: this.localStorage.getHideAnnouncement(),
    };
  }

  render() {
    return (
      <MessageBoard
        hide={this.state.hideAnnouncement}
        messages={this.generateAnnouncements()}
        onClose={this.onCloseAnnouncement}
      />
    );
  }

  protected generateAnnouncements() {
    return this.labels.announcement.messages.map((message: any) => ({
      content: message.content,
      type: message.type,
    }));
  }

  protected onCloseAnnouncement = () => {
    console.debug("onCloseAnnouncement");
    this.setState({
      hideAnnouncement: true,
    });
  };
}
