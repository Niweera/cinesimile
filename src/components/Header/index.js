import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "carbon-components-react";
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from "@carbon/icons-react";

const MainHeader = () => (
  <Header aria-label="CineSimile">
    <SkipToContent />
    <HeaderName href="/" prefix="">
      CineSimile
    </HeaderName>
    <HeaderNavigation aria-label="CineSimile">
      <HeaderMenuItem href="/">Home</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);
export default MainHeader;
