import React, { useState } from "react";
import styled from "styled-components";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { FontFamily } from "../utils/font";
import { LINK_HOVER_CLORO } from "../utils/color";

type Props = {
  title: string;
  url: string;
};

const PracticeItem: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickEmptyIcon = () => {
    setIsChecked(true);
  };

  const onClickCheckIcon = () => {
    setIsChecked(false);
  };

  return (
    <Base>
      {isChecked ? (
        <CheckCircleIcon color="mediumseagreen" onClick={onClickCheckIcon}></CheckCircleIcon>
      ) : (
        <EmptyCircleIcon color="mediumseagreen" onClick={onClickEmptyIcon}></EmptyCircleIcon>
      )}
      <PracticeItemTitle>{props.title}</PracticeItemTitle>
      <PracticeLink href={props.url} target="_blank">
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
  font-family: ${FontFamily};
  cursor: pointer;
  &:hover {
    color: ${LINK_HOVER_CLORO};
  }
`;

export default PracticeItem;
