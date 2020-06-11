import React from "react";
import styled from "styled-components";

type Props = {};

const Sample: React.FC<Props> = (props) => {
  return <Container>sample</Container>;
};

const Container = styled.div`
  background-color: blue;
  width: 50px;
  height: 50px;
`;

export default Sample;
