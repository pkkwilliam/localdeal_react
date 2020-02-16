import ApplicationComponent from "./applicationComponent";
import React from "react";
import { View, H5 } from ".";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import { styleSchema } from "./stylesheet";
import { Button } from "@material-ui/core";
import Deal, { Address, GetDealResponse } from "../modal/deal";
import { CREATE_VOTE } from "./middleware/service";
import { ReduxState } from "./redux/reducers";
import { setDeals } from "./redux/action";
import { connect } from "react-redux";

export interface Props {
  deal: Deal;
  selectedAddress?: Address;
  setDeals?: any;
}

export interface State {
  voted: boolean;
}

export class CardBottomVote extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      voted: false
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
    voteUpIcon
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
        style={{
          ...styles.buttonContainer,
          ...buttonContainerStyle
        }}
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
            serverIdentifierName
          })
        )
        .then((getDealResponse: GetDealResponse) => {
          this.setState({ voted: true });
          this.props.setDeals(getDealResponse);
        });
    }
  };
}

const mapStateToProps = (state: ReduxState) => ({
  selectedAddress: state.selectedAddress
});

export default connect(mapStateToProps, { setDeals })(CardBottomVote);

const styles = {
  buttonContainer: {
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5
  },
  componentStyle: {
    paddingRight: 10
  },
  mainIconStyle: {
    fontSize: 22,
    paddingTop: 2,
    paddingBottom: 2
  },
  iconButton: {
    padding: 0
  },
  rootContainer: {
    alignItems: "center"
  },
  VotedButtonContainer: {
    backgroundColor: styleSchema.color.greyTransparent
  },
  VoteButtonContainer: {
    backgroundColor: styleSchema.color.blueTransparent
  },
  votedIcon: {
    color: styleSchema.color.secondaryColor
  },
  voteIcon: {
    color: styleSchema.color.primaryColor
  }
};
