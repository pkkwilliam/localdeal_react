import ApplicationComponent from "./applicationComponent";
import React, { ReactNode } from "react";
import View from "./view";
import Deal, { Address } from "../modal/deal";
import Image from "./image";
import H6 from "./h6";
import { VOTE_CHANGE } from "./middleware/service";
import { OAuthProvider } from "../modal/oAuthProvider";
import Icon from "./icon";

export interface Props {
  deal: Deal;
  selectedAddress?: Address;
}

interface State {
  liked: boolean;
}

export default class CardBottomVote extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  render() {
    return (
      <View isFlexDirectionRow style={styles.rootContainer}>
        <this.CreatedByUserProfile />
        <this.LikeSection />
        <this.VerifyCount />
      </View>
    );
  }

  protected CountContainer = ({
    icon,
    count,
  }: {
    icon: ReactNode;
    count: number;
  }) => {
    return (
      <View
        isFlexDirectionRow
        onClick={this.onClickVote}
        style={styles.countContainer}
      >
        {icon}
        <H6 color="secondary" style={styles.countText}>
          {count}
        </H6>
      </View>
    );
  };

  protected LikeSection = () => {
    let likedValue = false;
    if (this.appState.user.userProfile.oAuthProvider !== OAuthProvider.NONE) {
      likedValue = this.props.deal.liked;
    } else {
      likedValue = this.state.liked;
    }
    const icon = likedValue ? (
      <Icon type="favroite" />
    ) : (
      <Icon type="favroiteBorder" />
    );
    return (
      <this.CountContainer count={this.props.deal.likedCount} icon={icon} />
    );
  };

  protected CreatedByUserProfile = () => {
    if (this.props.deal.createdBy) {
      const createdBy = this.props.deal.createdBy;
      return (
        <View isFlexDirectionRow style={styles.createdByUserProfileContainer}>
          <Image size="miniCircularImage" src={createdBy.imageUrl} />
          <H6 style={styles.createdByUserProfileName}>{createdBy.name}</H6>
        </View>
      );
    } else {
      return null;
    }
  };

  protected VerifyCount = () => {
    const deal = this.props.deal;
    if (deal.createdBy !== null || deal.verifiedLikedUserCount > 0) {
      return (
        <this.CountContainer
          count={this.props.deal.verifiedLikedUserCount}
          icon={<Icon type="verified" />}
        />
      );
    } else {
      return null;
    }
  };

  // this method will call to update the vote, service will return the deal that was update, UI is responsible to map it
  protected onClickVote = () => {
    this.appContext.serviceExecutor
      .execute(VOTE_CHANGE(this.props.deal.id, !this.state.liked))
      .then((result: Deal) => {
        this.appState.deal.setDeals(
          this.appState.deal.deals.map((deal) => {
            if (deal.id === result.id) {
              return result;
            } else {
              return deal;
            }
          })
        );
        this.setState({
          liked: !this.state.liked,
        });
      });
    console.log(
      "--- this feature is only for user who wants to likes a post or even attend an event anonymously, if any abusion is found, feature will be terminated! ---"
    );
  };
}

const styles = {
  createdByUserProfileContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  createdByUserProfileName: {
    paddingLeft: 5,
  },
  countContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  countText: {
    paddingLeft: 5,
  },
  rootContainer: {
    alignItems: "center",
  },
};
