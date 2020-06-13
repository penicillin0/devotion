import React from "react";
import styled from "styled-components";
import { IoMdLink } from "react-icons/io";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";

type Props = {};

const ProblemItemList: React.FC<Props> = (props) => {
  return (
    <Base>
      <ProblemMenu>問題一覧</ProblemMenu>
      <ProblemItem>
        <CheckCircleIcon color="mediumseagreen"></CheckCircleIcon>
        <ProblemItemTitle>ITP1_7_B - How Many Ways?</ProblemItemTitle>
        <LinkIcon color="silver"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="silver"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="silver"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>ITP1_7_B - How Many Ways?</ProblemItemTitle>
        <LinkIcon color="silver"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="silver"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="silver"></LinkIcon>
      </ProblemItem>
    </Base>
  );
};

const Base = styled.div`
  padding-right: 180px;
  padding-left: 180px;
  padding-top: 100px;
  width: 800px;
  margin: 0 auto;
`;

const ProblemMenu = styled.div`
  padding-bottom: 36px;
  font-size: 24px;
  font-family: 'Noto Sans JP', sans-serif;
`;

const ProblemItem = styled.div`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
`;

const CheckCircleIcon = styled(FaRegCheckCircle)`
  text-align: center;
  padding-right: 38px;
  font-size: 36px;
`;

const EmptyCircleIcon = styled(FaRegCircle)`
  padding-right: 38px;
  font-size: 36px;
`;

const LinkIcon = styled(IoMdLink)`
  text-align: center;
  font-size: 40px;
  flex-basis: 48px;
`;

const ProblemItemTitle = styled.div`
  flex-basis: 460px;

  font-style: normal;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
`;

export default ProblemItemList;
