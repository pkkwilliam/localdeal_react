import React, { ReactNode } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import {
  View,
  LocalDealTextField,
  styleSchema,
  PrimaryButton,
  BackgroundTheme,
  H4
} from "../../common";
import { Feature } from "../../common/feature/feature";

interface Props {
  onClickSubmit: () => void;
  onChangePassword: (password: string) => void;
  onChangeUsername: (username: string) => void;
  password: string;
  username: string;
}

export default class LoginView extends ApplicationComponent<Props> {
  render() {
    const loginFeatures: ReactNode[] = [];
    if (this.appContext.features.includes(Feature.LOGIN_LOCALDEAL)) {
      loginFeatures.push(<this.Container />);
    }
    return loginFeatures;
  }

  protected Container = () => {
    return (
      <>
        <BackgroundTheme>
          <this.Header />
          <this.UsernameTextField />
          <this.PasswordTextField />
          <this.SubmitButton />
        </BackgroundTheme>
      </>
    );
  };

  protected Header = () => {
    return (
      <View style={styles.headerContainer}>
        <H4>{this.appContext.labels.login.formName}</H4>
      </View>
    );
  };

  protected PasswordTextField = () => {
    return (
      <LocalDealTextField
        onChange={this.props.onChangePassword}
        text={this.appContext.labels.login.password}
      />
    );
  };

  protected SubmitButton = () => {
    // this need to be fix if use!!!
    return <PrimaryButton disabled />;
  };

  protected UsernameTextField = () => {
    return (
      <LocalDealTextField
        onChange={this.props.onChangeUsername}
        text={this.appContext.labels.login.username}
      />
    );
  };
}

const styles = {
  headerContainer: {
    width: "inherit"
  },
  submitButton: {
    marginTop: 15
  },
  rootContainer: {
    alignItems: "center",
    backgroundColor: styleSchema.color.primaryColorTransparent,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: styleSchema.dimension.FILL_ALL_WIDTH
  }
};
