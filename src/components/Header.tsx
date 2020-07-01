import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";

const LITGHT_BLUE500 = `#37add7`;
const HOME_PATH = "/"; 
const PRACTICES_PATH = "/practices";

const Header: React.FC<{ pathname?: string }> = ({ pathname }) => {

return (
  <HeaderBase>
    <HomeLink href="/">
      <HomeIcon></HomeIcon>
    </HomeLink>
    <Link href="/">
      <a className={pathname === HOME_PATH ? "is-active" : ""}>Home</a>
    </Link>
    <Link href="/practices">
      <a className={pathname === PRACTICES_PATH ? "is-active" : ""}>Practices</a>
    </Link>
  </HeaderBase>
)};

const HeaderBase = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: #ffffff;
  z-index: 1;
`;

const HomeLink = styled.a`
  display: flex;
  align-items: center;
`;

const HomeIcon = styled(TiHome)`
  width: 48px;
  height: 48px;
  padding-top: 28px;
  padding-left: 48px;
  color: ${LITGHT_BLUE500};
  cursor: pointer;
`;

export default Header;
