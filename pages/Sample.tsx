import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";

type Props = {};

const Sample: React.FC<Props> = (props) => {
  return (
    <IconContext.Provider
      value={{ color: "blue", className: "global-class-name" }}
    >
      <Container>
        sample
        <FaBeer></FaBeer>
      </Container>
    </IconContext.Provider>
  );
};

const Container = styled.div`
  background-color: blue;
  width: 50px;
  height: 50px;
`;

export default Sample;
