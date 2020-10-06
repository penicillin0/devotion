import React from "react";
import styled from "styled-components";

type Props = {};

const PracticeDetail: React.FC<Props> = (props) => {
  return (
    <Base>
      <PracticeTile>1　ITP1_7_B - How Many Ways?</PracticeTile>
      <PracticeStatement>
        組み合わせの数
        <br></br>
        <br></br>
        1 から n までの数の中から、重複無しで３つの数を選びそれらの合計が x となる組み合わせの数を求めるプログラムを作成して下さい。
        <br></br>
        <br></br>
        例えば、1 から 5 までの数から３つを選んでそれらの合計が 9 となる組み合わせは、
        <br></br>
        <br></br>
        1 + 3 + 5 = 9
        <br></br>
        2 + 3 + 4 = 9
        <br></br>
        ....
      </PracticeStatement>
      <Line></Line>
      <PracticeResult>
      2020/06/19 20:57:20 AC
      </PracticeResult>
    </Base>
  );
};

const Base = styled.div`
  position: relative;
  padding-top: 24px;
  padding-right: 80px;
  padding-left: 80px;
  height: 4096px;
  margin: 0 auto;
`;

const PracticeTile = styled.div`
  font-size: 48px;
`;

const PracticeStatement = styled.div`
  padding-top: 80px;
  padding-bottom: 24px;
  font-size: 24px;
`;

const Line = styled.hr`
  border: 1px solid #E0E0E0;
`;

const PracticeResult = styled.div`
  padding-top: 80px;
  font-size: 24px;
`;

export default PracticeDetail;