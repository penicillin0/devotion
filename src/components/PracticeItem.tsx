import React, { useState, Props } from "react";
import styled from "styled-components";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

const LINK_HOVER_CLORO = `#0B8AFF`;
const HeaderFontFamily = `"Poppins", "Noto Sans JP", sans-serif`;

interface Practice {
  title: string;
  url: string;
}

const PracticeItem: React.FC<Practice> = ({ title, url }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Base>
      {isChecked ? (
        <CheckCircleIcon color="mediumseagreen" onClick={() => setIsChecked(false)}></CheckCircleIcon>
      ) : (
        <EmptyCircleIcon color="mediumseagreen" onClick={() => setIsChecked(true)}></EmptyCircleIcon>
      )}
      <PracticeItemTitle>{title}</PracticeItemTitle>
      <PracticeLink href={url} target="_blank">
        <LinkIcon></LinkIcon>
      </PracticeLink>
    </Base>
  );
};

const Base = styled.div`
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
  padding-right: 36px;
  width: 40px;
  height: 40px;
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

export default PracticeItem;
