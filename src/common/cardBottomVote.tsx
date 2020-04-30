import ApplicationComponent from "./applicationComponent";
import React, { ReactNode } from "react";
import View from "./view";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Deal, { Address } from "../modal/deal";
import Image from "./image";
import H6 from "./h6";
import { styleSchema } from "./stylesheet";
import { VOTE_CHANGE } from "./middleware/service";

export interface Props {
  deal: Deal;
  selectedAddress?: Address;
}

export default class CardBottomVote extends ApplicationComponent<Props> {
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
    console.log(this.props.deal.liked);
    const icon = this.props.deal.liked ? (
      <FavoriteIcon style={styles.likedIcon} />
    ) : (
      <FavoriteBorderIcon style={styles.likedIcon} />
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
    return (
      <this.CountContainer
        count={this.props.deal.verifiedUpLikedUserCount}
        icon={<VerifiedUserIcon style={styles.verifyIcon} />}
      />
    );
  };

  // this method will call to update the vote, service will return the deal that was update, UI is responsible to map it
  protected onClickVote = () => {
    console.log(
      "--- this feature is only for user who wants to likes a post or even attend an event anonymously, if any abusion is found, feature will be terminated! ---"
    );
    this.appContext.serviceExecutor
      .execute(VOTE_CHANGE(this.props.deal.id))
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
      });
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
  likedIcon: {
    color: styleSchema.color.red,
    fontSize: 20,
  },
  rootContainer: {
    alignItems: "center",
  },
  verifyIcon: {
    color: styleSchema.color.green,
    fontSize: 20,
  },
};
