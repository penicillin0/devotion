import React from "react";
import styled from "styled-components";
import { IoMdLink } from "react-icons/io";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";

type Props = {};

const ProblemItemList: React.FC<Props> = (props) => {
  return (
    <Base>
      <ProblemItem>
        <CheckCircleIcon color="mediumseagreen"></CheckCircleIcon>
        <ProblemItemTitle>ITP1_7_B - How Many Ways?</ProblemItemTitle>
        <LinkIcon color="dimgray"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="dimgray"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="dimgray"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>ITP1_7_B - How Many Ways?</ProblemItemTitle>
        <LinkIcon color="dimgray"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="dimgray"></LinkIcon>
      </ProblemItem>
      <ProblemItem>
        <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
        <ProblemItemTitle>三井住友信託銀行プログラミ...</ProblemItemTitle>
        <LinkIcon color="dimgray"></LinkIcon>
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
  font-size: 24px;
`;

const ProblemItem = styled.div`
  display: flex;
  height: 50px;
  align-item: center;
`;

const CheckCircleIcon = styled(FaRegCheckCircle)`
  text-align: center;
  flex-basis: 8%;
  font-size: 33px;
  top: 50%;
`;

const EmptyCircleIcon = styled(FaRegCircle)`
  text-align: center;
  flex-basis: 8%;
  font-size: 33px;
  top: 50%;
`;

const LinkIcon = styled(IoMdLink)`
  text-align: center;
  font-size: 35px;
  flex-basis: 10%;
`;

const ProblemItemTitle = styled.div`
  flex-basis: 55%;

  font-style: normal;
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
`;

export default ProblemItemList;
