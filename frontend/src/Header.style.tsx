import styled from "styled-components";
import colors from "./shared/style/colors";

const StyledHeader = styled.div`
  position: sticky;
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

const NavLink = styled.div`
  font-family: "Cormorant+Garamond", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: ${colors.primaryDark};
  margin: 0 16px;
  cursor: pointer;
  padding: 1px;
  transition-property: font-size;

  :hover {
    padding: 0px;
    font-size: 25px;
  }
`;

const StyledAvatar = styled.img`
  height: 32px;
  width: 32px;
  margin: 0 20px;
  cursor: pointer;
`;

const Icon = styled.div`
  background-color: ${colors.primary};
  height: 36px;
  width: 36px;
  margin: 0 20px;
  border-radius: 2px;
`;

export { NavLink, NavBar, StyledAvatar, Icon };

export default StyledHeader;
