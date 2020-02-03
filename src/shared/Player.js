import React from "react";
import styled from "styled-components";

const PlayCon = styled.div``;
const PlayHeader = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #2e86de;
  text-align: center;
  margin-bottom: 20px;
`;
const PlayBoard = styled.div`
  width: 200px;
  height: 200px;
  background-color: #54a0ff;
  border-radius: 5px;
`;
const PlayChocie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
`;

const ChocieSpan = styled.span`
  margin-top: 80px;
  font-weight: bolder;
`;

const BtnBox = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChoiceBtn = styled.button`
  padding: 15px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bolder;
  :not(:first-child) {
    margin-top: 15px;
  }
`;

const Player = props => {
  return (
    <PlayCon>
      <PlayHeader>User</PlayHeader>
      <PlayBoard>
        {props.gameStarted ? (
          pgs(props)
        ) : (
          <PlayChocie>
            <ChocieSpan>{props.current}</ChocieSpan>
          </PlayChocie>
        )}
      </PlayBoard>
    </PlayCon>
  );
};

const pgs = props => {
  return (
    <BtnBox>
      {props.items.map((item, i) => (
        <ChoiceBtn key={i} onClick={() => props.selectChoice(item)}>
          {item}
        </ChoiceBtn>
      ))}
    </BtnBox>
  );
};
export default Player;
