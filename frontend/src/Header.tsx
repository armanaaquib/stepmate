import React, { ReactElement } from "react";
import avatar from "./shared/images/avatar.png";

import StyledHeader, {
  NavBar,
  StyledAvatar,
  Icon,
  StyledNavLink,
} from "./Header.style";

const Header = (): ReactElement => (
  <StyledHeader>
    <NavBar>
      <Icon data-testid="app-icon" />
      <StyledNavLink to="/blog">Blog</StyledNavLink>
      <StyledNavLink to="/q&a">Q&A</StyledNavLink>
    </NavBar>
    <NavBar>
      <StyledNavLink to="/todo">Todo</StyledNavLink>
      <StyledNavLink to="/notes">Notes</StyledNavLink>
      <StyledAvatar src={avatar} alt="Avatar" />
    </NavBar>
  </StyledHeader>
);

export default Header;
