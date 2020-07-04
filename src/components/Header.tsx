import * as React from "react";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { BsCardChecklist } from "react-icons/bs";
import { LITGHT_BLUE500 } from '../utils/color';

const HOME_PATH = "/"; 
const PRACTICES_PATH = "/practices";

const Header: React.FC<{ pathname?: string }> = ({ pathname }) => {

return (
  <HeaderBase>
    <LinkItem href={HOME_PATH}>
      <HomeIcon></HomeIcon>
    </LinkItem>
    <LinkItem href={PRACTICES_PATH}>
      <PracticeIcon></PracticeIcon>
    </LinkItem>
  </HeaderBase>
)};

const HeaderBase = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`;

const LinkItem = styled.a`
  display: flex;
  align-items: center;
`;

const HomeIcon = styled(TiHome)`
  width: 48px;
  height: 48px;
  padding-left: 48px;
  color: ${LITGHT_BLUE500};
  cursor: pointer;
`;

const PracticeIcon = styled(BsCardChecklist)`
  width: 48px;
  height: 48px;
  padding-left: 48px;
  color: ${LITGHT_BLUE500};
  cursor: pointer;
`;

export default Header;
