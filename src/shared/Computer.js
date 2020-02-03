import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const ComHeader = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #feca57;
  text-align: center;
  margin-bottom: 20px;
`;
const ComBoard = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #feca57;
  border-radius: 5px;
`;
const ComChoice = styled.div`
  color: white;
  font-weight: bolder;
  font-size: 22px;
`;

const ComputerPlayer = props => {
  return (
    <Container>
      <ComHeader>computer</ComHeader>
      <ComBoard>
        <ComChoice>{props.current}</ComChoice>
      </ComBoard>
    </Container>
  );
};

export default ComputerPlayer;
