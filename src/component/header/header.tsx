import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";
import { HeaderView } from ".";
import { ReduxState } from "../../common/redux/reducers";
import CurrentArea from "../../modal/currentArea";
import { Address } from "../../modal/deal";
import { connect } from "react-redux";
import { UserProfile } from "../../modal/userProfile";

interface Props {
  addressesPrediction: Address[];
  position: CurrentArea;
  selectedAddress: Address;
  userProfile: UserProfile;
}

interface State {
  isCreateDealDrawerOpen: boolean;
  isHamburgerMenuDrawerOpen: boolean;
  useAutoLocation: boolean;
}

export class Header extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isCreateDealDrawerOpen: false,
      isHamburgerMenuDrawerOpen: false,
      useAutoLocation: true
    };
  }

  render() {
    return (
      <HeaderView
        isCreateDealDrawerOpen={this.state.isCreateDealDrawerOpen}
        isHamburgerMenuDrawerOpen={this.state.isHamburgerMenuDrawerOpen}
        onClickCreateDeal={this.onClickCreateDeal}
        onClickHamburgerMenu={this.onClickHamburgerMenu}
        onCloseCreateDeal={this.onCloseCreateDeal}
        onCloseHamburgerMenu={this.onCloseHamburgerMenu}
        onClickLocationButton={this.onClickLocationButton}
        selectedAddress={this.props.selectedAddress}
        userProfile={this.props.userProfile}
      />
    );
  }

  protected onClickCreateDeal = () => {
    console.debug("onClickCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: true
    });
  };

  protected onClickHamburgerMenu = () => {
    console.debug("onClickHamburgerMenu");
    this.setState({
      isHamburgerMenuDrawerOpen: true
    });
  };

  protected onCloseCreateDeal = () => {
    console.debug("onCloseCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: false
    });
  };

  protected onCloseHamburgerMenu = () => {
    console.debug("onCloseHamburgerMenu");
    this.setState({
      isHamburgerMenuDrawerOpen: false
    });
  };

  protected onClickLocationButton = () => {
    // need to complete
    console.debug("onClickLocationButton");
    this.setState({
      useAutoLocation: true
    });
  };
}

const mapStateToProps = (state: ReduxState): Props => ({
  addressesPrediction: state.addressesPrediction,
  position: state.position,
  selectedAddress: state.selectedAddress,
  userProfile: state.userProfile
});

export default connect(mapStateToProps)(Header);
