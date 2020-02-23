import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const ComputerPlayer = ({ current }) => {
  return (
    <Container>
      <ComHeader>computer</ComHeader>
      <ComBoard>
        <ComChoice>{current}</ComChoice>
      </ComBoard>
    </Container>
  );
};

ComputerPlayer.propTypes = {
  current: PropTypes.string
};

export default ComputerPlayer;
