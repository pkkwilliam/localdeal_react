import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { HeaderMenuView } from ".";
import { UserProfile } from "../../modal/userProfile";
import { ReduxState } from "../../common/redux/reducers";
import { removeUserProfile } from "../../common/redux/action";
import { connect } from "react-redux";
import { LOGOUT_OAUTH } from "../../common/middleware/service";

interface Props {
  removeUserProfile?: any;
  userProfile: UserProfile;
}

interface State {
  isMenuOpen: boolean;
  isToastMessageOpen: boolean;
}

export class HeaderMenu extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isToastMessageOpen: false
    };
  }

  render() {
    return (
      <HeaderMenuView
        isMenuOpen={this.state.isMenuOpen}
        onClickMenu={this.onClickMenu}
        onClickLogout={this.onClickLogout}
        onCloseMenu={this.onCloseMenu}
        userProfile={this.props.userProfile}
      />
    );
  }

  onClickMenu = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  onClickLogout = () => {
    console.log("onClickLogout");
    this.appContext.serviceExecutor.execute(LOGOUT_OAUTH()).then(() => {
      this.props.removeUserProfile();
    });
  };

  onCloseMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };
}

const mapStateToProps = (reduxState: ReduxState): Props => ({
  userProfile: reduxState.userProfile
});

export default connect(mapStateToProps, { removeUserProfile })(HeaderMenu);
