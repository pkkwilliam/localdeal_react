import React from "react";
import { LazyLoadComponent } from "./lazyLoadComponent";

export const getLazyComponent = (component: LazyLoadComponent) => {
  return React.lazy(() => getPath(component));
};

function getPath(component: LazyLoadComponent): any {
  switch (component) {
    case LazyLoadComponent.Banner:
      return import("../component/banner/banner");
    case LazyLoadComponent.CollapseCard:
      return import("../common/collapseCard");
    case LazyLoadComponent.CreateDeal:
      return import(
        "../component/createDealLandingPage/createDealLandingPage.v2"
      );
    case LazyLoadComponent.Drawer:
      return import("../common/drawer");
    case LazyLoadComponent.Header:
      return import("../component/header/header");
    case LazyLoadComponent.HeaderMenu:
      return import("../component/menu/headerMenu");
    case LazyLoadComponent.LandingPage:
      return import("../component/landingPage/landingPage");
    case LazyLoadComponent.Slide:
      return import("../common/slide/slide");
  }
}
