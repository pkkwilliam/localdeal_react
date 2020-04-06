import React from "react";
import { LazyLoadComponent } from "./lazyLoadComponent";

export const getLazyComponent = (component: LazyLoadComponent) => {
  return React.lazy(() => getPath(component));
};

function getPath(component: LazyLoadComponent): any {
  switch (component) {
    case LazyLoadComponent.Banner:
      return import("../component/banner/banner");
    case LazyLoadComponent.CreateDeal:
      return import(
        "../component/createDealLandingPage/createDealLandingPage.v2"
      );
    case LazyLoadComponent.Drawer:
      return import("../common/drawer");
    case LazyLoadComponent.HeaderMenu:
      return import("../component/menu/headerMenu");
  }
}
