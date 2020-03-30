import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { OAuthView } from ".";
import { UserProfile } from "../../modal/userProfile";
import { ReduxState } from "../../common/redux/reducers";
import { connect } from "react-redux";
import { removeUserProfile } from "../../common/redux/action";
import { LOGOUT_OAUTH } from "../../common/middleware/service";

interface Props {
  removeUserProfile?: any;
  userProfile: UserProfile;
}

export class OAuth extends ApplicationComponent<Props> {
  render() {
    return (
      <OAuthView
        onClickLogout={this.onClickLogout}
        userProfile={this.props.userProfile}
      />
    );
  }

  protected onClickLogout = () => {
    console.log("onClickLogout");
    this.appContext.serviceExecutor.execute(LOGOUT_OAUTH()).then(() => {
      this.props.removeUserProfile();
    });
  };
}
const mapStateToProps = (reduxState: ReduxState): Props => ({
  userProfile: reduxState.userProfile
});

export default connect(mapStateToProps, { removeUserProfile })(OAuth);
