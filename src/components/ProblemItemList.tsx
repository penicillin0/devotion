import React from "react";
import styled from "styled-components";
import { IoMdLink } from "react-icons/io";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { practicesState } from "./App";
import { useRecoilValue } from "recoil";

type Props = {};

const problems = [
  {
    isSolved: true,
    name: "ITP1_7_B - How Many Ways?",
    link: "http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ITP1_7_B&lang=ja",
  },
  {
    isSolved: false,
    name: "ITP1_7_B - How Many Ways?",
    link: "http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ITP1_7_B&lang=ja",
  },
  {
    isSolved: false,
    name: "三井住友信託銀行プログラミ...",
    link: "https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_d",
  },
  {
    isSolved: true,
    name: "三井住友信託銀行プログラミ...",
    link: "https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_d",
  },
];

const ProblemItemList: React.FC<Props> = (props) => {
  const practices = useRecoilValue(practicesState);
  console.log(practices);
  return (
    <Base>
      <ProblemMenu>問題一覧</ProblemMenu>
      <ProblemItems>
        {problems.map((problem) => (
          <ProblemItem>
            {problem.isSolved ? (
              <CheckCircleIcon color="mediumseagreen"></CheckCircleIcon>
            ) : (
              <EmptyCircleIcon color="dimgray"></EmptyCircleIcon>
            )}
            <ProblemItemTitle>{problem.name}</ProblemItemTitle>
            <ProblemLink href={problem.link} target="_blank">
              <LinkIcon></LinkIcon>
            </ProblemLink>
          </ProblemItem>
        ))}
      </ProblemItems>
    </Base>
  );
};

const Base = styled.div`
  position: relative;
  width: 780px;
  height: 1024px;
  margin: 0 auto;
`;

const ProblemMenu = styled.div`
  padding-left: 48px;
  font-size: 48px;
  font-family: "Poppins", "Noto Sans JP", sans-serif;
`;

const ProblemItems = styled.div`
  padding-top: 36px;
  padding-left: 48px;
  width: 780px;
`;

const ProblemItem = styled.div`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
`;

const ProblemLink = styled.a`
  display: flex;
  align-items: center;
`;

const CheckCircleIcon = styled(FaRegCheckCircle)`
  text-align: center;
  padding-right: 36px;
  width: 36px;
  height: 36px;
`;

const EmptyCircleIcon = styled(FaRegCircle)`
  padding-right: 38px;
  width: 36px;
  height: 36px;
`;

const LinkIcon = styled(IoMdLink)`
  text-align: center;
  font-size: 36px;
  color: #bdbdbd;
  cursor: pointer;
  &:hover {
    color: #0b8aff;
  }
`;

const ProblemItemTitle = styled.div`
  flex-basis: 500px;

  font-size: 24px;
  font-family: "Poppins", "Roboto", sans-serif;
  cursor: pointer;
  &:hover {
    color: #0b8aff;
  }
`;

export default ProblemItemList;
