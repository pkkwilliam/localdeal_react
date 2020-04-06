import ApplicationComponent from "./applicationComponent";
import React from "react";
import { View, H5 } from ".";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import { styleSchema } from "./stylesheet";
import Button from "@material-ui/core/Button";
import Deal, { Address, GetDealResponse } from "../modal/deal";
import { CREATE_VOTE } from "./middleware/service";

export interface Props {
  deal: Deal;
  selectedAddress?: Address;
}

export interface State {
  voted: boolean;
}

export default class CardBottomVote extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      voted: false,
    };
  }

  render() {
    const { downVote, upVote } = this.props.deal?.vote ?? {};
    return (
      <View isFlexDirectionRow style={styles.rootContainer}>
        <this.VoteButton voteCount={upVote ?? 0} voteUpIcon={true} />
        <this.VoteButton voteCount={downVote ?? 0} voteUpIcon={false} />
      </View>
    );
  }

  protected VoteButton = ({
    voteCount,
    voteUpIcon,
  }: {
    voteCount: number;
    voteUpIcon: boolean;
  }) => {
    let buttonContainerStyle = null;
    let iconStyle = null;
    if (this.state.voted) {
      buttonContainerStyle = styles.VotedButtonContainer;
      iconStyle = { ...styles.mainIconStyle, ...styles.votedIcon };
    } else {
      buttonContainerStyle = styles.VoteButtonContainer;
      iconStyle = { ...styles.mainIconStyle, ...styles.voteIcon };
    }
    let voteFunction = voteUpIcon ? this.onPressUpVote : this.onPressDownVote;
    return (
      <View
        isFlexDirectionRow
        style={{ ...styles.buttonContainer, ...buttonContainerStyle }}
      >
        <Button
          disabled={this.state.voted}
          onClick={voteFunction}
          style={styles.iconButton}
        >
          {voteUpIcon ? (
            <ThumbUp style={iconStyle} />
          ) : (
            <ThumbDown style={iconStyle} />
          )}
        </Button>
        <H5 style={styles.componentStyle}>{voteCount}</H5>
      </View>
    );
  };

  protected onPressDownVote = () => {
    this.createVoteRequest(false);
  };

  protected onPressUpVote = () => {
    this.createVoteRequest(true);
  };

  protected createVoteRequest = async (upVote: boolean) => {
    const { id, serverIdentifierName } = this.props.deal;
    if (!this.state.voted && id && serverIdentifierName) {
      this.appContext.serviceExecutor
        .execute(
          CREATE_VOTE({
            id,
            upVote,
            serverIdentifierName,
          })
        )
        .then((getDealResponse: GetDealResponse) => {
          this.setState({ voted: true });
          this.appState.deal.setDeals(getDealResponse.deals);
        });
    }
  };
}

const styles = {
  buttonContainer: {
    alignItems: "center",
    borderRadius: 5,
    marginRight: 5,
  },
  componentStyle: {
    paddingRight: 10,
  },
  mainIconStyle: {
    fontSize: 22,
    paddingTop: 2,
    paddingBottom: 2,
  },
  iconButton: {
    padding: 0,
  },
  rootContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  VotedButtonContainer: {
    backgroundColor: styleSchema.color.secondaryColorTransparent,
  },
  VoteButtonContainer: {
    backgroundColor: styleSchema.color.primaryColorTransparent,
  },
  votedIcon: {
    color: styleSchema.color.secondaryColor,
  },
  voteIcon: {
    color: styleSchema.color.primaryColor,
  },
};
