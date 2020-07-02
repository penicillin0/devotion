import React from "react";
import styled from "styled-components";
import PracticeItem from "./PracticeItem";
import { practicesState } from "./App";
import { useRecoilValue } from "recoil";

type Props = {};

const HeaderFontFamily = `"Poppins", "Noto Sans JP", sans-serif`;

const PracticeItemList: React.FC<Props> = (props) => {
  const practices = useRecoilValue(practicesState);
  console.log(practices);
  return (
    <Base>
      <PracticeMenu>問題一覧</PracticeMenu>
      <PracticeItems>
        {practices.map((practice) => (
          <PracticeItem title={practice.title} url={practice.url}></PracticeItem>
        ))}
      </PracticeItems>
    </Base>
  );
};

const Base = styled.div`
  position: relative;
  top: 90px;
  width: 780px;
  height: 4096px;
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

export default PracticeItemList;
