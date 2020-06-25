import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";

const Header: React.FC<{ pathname?: string }> = ({ pathname }) => (
  <HeaderBase>
    <HomeLink href="/">
      <HomeIcon></HomeIcon>
    </HomeLink>
    <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>{" "}
    <Link href="/practices">
      <a className={pathname === "/practices" ? "is-active" : ""}>Practices</a>
    </Link>
  </HeaderBase>
);

const HeaderBase = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: #ffffff;
  z-index:1;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);;
  
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
  color: #37add7;
  cursor: pointer;
`;

export default Header;
