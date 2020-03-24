import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { OAuthView } from ".";
import { UserProfile } from "../../modal/userProfile";
import { ReduxState } from "../../common/redux/reducers";
import { connect } from "react-redux";

interface Props {
  userProfile: UserProfile;
}

export class OAuth extends ApplicationComponent<Props> {
  render() {
    return <OAuthView userProfile={this.props.userProfile} />;
  }
}

const mapStateToProps = (reduxState: ReduxState): Props => ({
  userProfile: reduxState.userProfile
});

export default connect(mapStateToProps)(OAuth);
