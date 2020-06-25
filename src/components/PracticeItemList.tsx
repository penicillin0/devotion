import React from "react";
import styled from "styled-components";
import { IoMdLink } from "react-icons/io";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { practicesState } from "./App";
import { useRecoilValue } from "recoil";

type Props = {};

const HeaderFontFamily = `"Poppins", "Noto Sans JP", sans-serif`;
const LINK_HOVER_CLORO = `#0B8AFF`;

const PracticeItemList: React.FC<Props> = (props) => {
  const practices = useRecoilValue(practicesState);
  console.log(practices);
  return (
    <Base>
      <PracticeMenu>問題一覧</PracticeMenu>
      <PracticeItems>
        {practices.map((practice) => (
          <PracticeItem>
            <CheckCircleIcon color="mediumseagreen"></CheckCircleIcon>
            <PracticeItemTitle>{practice.title}</PracticeItemTitle>
            <PracticeLink href={practice.url} target="_blank">
              <LinkIcon></LinkIcon>
            </PracticeLink>
          </PracticeItem>
        ))}
      </PracticeItems>
    </Base>
  );
};

const Base = styled.div`
  position: relative;
  top: 90px;
  width: 780px;
  height: 2048px;
  margin: 0 auto;
`;

const PracticeMenu = styled.div`
  padding-top: 80px;  
  padding-left: 48px;
  font-size: 48px;
  font-family: ${HeaderFontFamily};
`;

const PracticeItems = styled.div`
  padding-top: 36px;
  padding-left: 48px;
`;

const PracticeItem = styled.div`
  padding-bottom: 24px;
  height: 72px;
  display: flex;
  align-items: center;
`;

const PracticeLink = styled.a`
  display: flex;
  align-items: center;
`;

const CheckCircleIcon = styled(FaRegCheckCircle)`
  padding-right: 36px;
  width: 40px;
  height: 40px;
`;

const EmptyCircleIcon = styled(FaRegCircle)`
  padding-right: 38px;
  width: 36px;
  height: 36px;
`;

const LinkIcon = styled(IoMdLink)`
  width: 48px;
  height: 48px;
  padding-right: 48px;
  color: #bdbdbd;
  cursor: pointer;
  &:hover {
    color: ${LINK_HOVER_CLORO};
  }
`;

const PracticeItemTitle = styled.div`
  flex-basis: 500px;

  font-size: 24px;
  font-family: ${HeaderFontFamily};
  cursor: pointer;
  &:hover {
    color: ${LINK_HOVER_CLORO};
  }
`;

export default PracticeItemList;
