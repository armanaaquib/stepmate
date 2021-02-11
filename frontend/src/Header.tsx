import React, { ReactElement } from "react";
import avatar from "./shared/images/avatar.png";

import StyledHeader, {
  NavBar,
  NavLink,
  StyledAvatar,
  Icon,
} from "./Header.style";

const Header = (): ReactElement => (
  <StyledHeader>
    <NavBar>
      <Icon data-testid="app-icon" />
      <NavLink>Blog</NavLink>
      <NavLink>Q&A</NavLink>
    </NavBar>
    <NavBar>
      <NavLink>Todo</NavLink>
      <NavLink>Notes</NavLink>
      <StyledAvatar src={avatar} alt="Avatar" />
    </NavBar>
  </StyledHeader>
);

export default Header;
