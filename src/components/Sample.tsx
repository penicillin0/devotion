import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoMdLink } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

type Props = {};

const Sample: React.FC<Props> = (props) => {
  return (

      <Container>
        <Container_x>
          <IconContext.Provider value={{ color: "mediumseagreen"}}><Container_a><FaRegCheckCircle/></Container_a></IconContext.Provider>
          <Container_b>1</Container_b>
          <Container_c>ITP1_7_B - How Many Ways?</Container_c>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_d><IoMdLink/></Container_d></IconContext.Provider>
        </Container_x>
        <Container_x>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_a><FaRegCircle/></Container_a></IconContext.Provider>
          <Container_b>6</Container_b>
          <Container_c>三井住友信託銀行プログラミ...</Container_c>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_d><IoMdLink/></Container_d></IconContext.Provider>
        </Container_x>
        <Container_x>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_a><FaRegCircle/></Container_a></IconContext.Provider>
          <Container_b>6</Container_b>
          <Container_c>三井住友信託銀行プログラミ...</Container_c>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_d><IoMdLink/></Container_d></IconContext.Provider>
        </Container_x>
        <Container_x>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_a><FaRegCircle/></Container_a></IconContext.Provider>
          <Container_b>1</Container_b>
          <Container_c>ITP1_7_B - How Many Ways?</Container_c>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_d><IoMdLink/></Container_d></IconContext.Provider>
        </Container_x>
        <Container_x>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_a><FaRegCircle/></Container_a></IconContext.Provider>
          <Container_b>6</Container_b>
          <Container_c>三井住友信託銀行プログラミ...</Container_c>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_d><IoMdLink/></Container_d></IconContext.Provider>
        </Container_x>
        <Container_x>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_a><FaRegCircle/></Container_a></IconContext.Provider>
          <Container_b>6</Container_b>
          <Container_c>三井住友信託銀行プログラミ...</Container_c>
          <IconContext.Provider value={{ color: "dimgray"}}><Container_d><IoMdLink/></Container_d></IconContext.Provider>
        </Container_x>
      </Container>
      
      
  );
};

const Container = styled.div`
  padding-right: 180px;
  padding-left: 180px;
  padding-top: 100px;
  width: 800px;
  margin: 0 auto;
  font-size: 24px;
`;

const Container_x = styled.div`
  display: flex;
  height: 50px;
`;

const Container_a = styled.div`
  text-align:center;
  flex-basis: 8%;
  font-size: 33px;
  top: 50%;
`;

const Container_b = styled.div`
  text-align:center;
  flex-basis: 8%;
`;

const Container_c = styled.div`
  flex-basis: 55%;

  font-style: normal;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
`;

const Container_d = styled.div`
  text-align:center;
  font-size: 35px;
  flex-basis: 10%;
`;

export default Sample;