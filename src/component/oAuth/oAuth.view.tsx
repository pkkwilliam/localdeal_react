import React, { ReactElement } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { Button, Link } from "@material-ui/core";
import Modal from "../../common/modal";
import { OAuthProvider } from "../../common/feature/oAuthProvider";

const url: string =
  "https://accounts.google.com/o/oauth2/v2/auth?scope=profile&access_type=offline&include_granted_scopes=true&response_type=code&state=GOOGLE&redirect_uri=http://localhost:3000&client_id=965687889406-d0pqe0hr6i3c4uo18rr5j0spqq73phth.apps.googleusercontent.com";

interface Props {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onSelectedProvider: (provider: OAuthProvider) => void;
  selectedOAuthProvider: OAuthProvider;
}

export default class OAuthView extends ApplicationComponent<Props> {
  render() {
    return (
      <>
        <this.GoogleOAuthLoginIcon />
        {/* <this.GoogleOAuthLoginRedirectSection /> */}
      </>
    );
  }

  protected GoogleOAuthLoginIcon = () => {
    return (
      <Button>
        <Link href={url}>Google</Link>
      </Button>
    );
  };

  // protected GoogleOAuthLoginRedirectSection = () => {
  //   if (this.props.selectedOAuthProvider === OAuthProvider.GOOGLE) {
  //     return <this.ModalPopup></this.ModalPopup>;
  //   } else {
  //     return null;
  //   }
  // };

  protected ModalPopup = ({ children }: { children: ReactElement }) => {
    return (
      <Modal open={this.props.isModalOpen} onClose={this.props.onCloseModal}>
        {children}
      </Modal>
    );
  };
}
