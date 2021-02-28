import styled from "styled-components";
import { NavLink } from "react-router-dom";
import colors from "./shared/style/colors";

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 200;
  background-color: ${colors.secondaryLight};
  height: 72px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 188, 205, 0.1);
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Cormorant+Garamond", serif;
  font-weight: 500;
  font-size: 24px;
  color: ${colors.primaryDark};
  margin: 0 20px;
  cursor: pointer;

  &.active {
    color: ${colors.primary};
    font-weight: 600;
  }
`;

const StyledAvatar = styled.img`
  height: 32px;
  width: 32px;
  margin: 0 20px;
`;

const Icon = styled.div`
  background-color: ${colors.primary};
  height: 36px;
  width: 36px;
  margin: 0 20px;
  border-radius: 2px;
`;

export { StyledNavLink, NavBar, StyledAvatar, Icon };

export default StyledHeader;
