import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ScoreCon = styled.div`
  height: 500px;
`;
const ResultBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const RoundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 400px;
  p {
    font-size: 22px;
    text-decoration: none;
  }
`;
const StateBox = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
`;
const StateText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 15px;
`;
const Round = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .winner {
    color: red;
  }
`;
const RoundContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const RoundDiv = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundState = styled.div`
  font-size: 22px;
`;

const Scores = ({ player, tie, computer, results ,setCount,setPlayer,setComputer}) => {
  let newarr = [setPlayer,setComputer].sort((a,b)=>b-a);
  function getResult(a,b) {
    if(a>b){
      return "Player Win"
    }
    else if (a<b){
      return "Computer Win"
    }
    else{
      return "DRAW GAME"
    }
  }
  return (
    <ScoreCon>
      <ResultBox>
        <StateBox>
          WIN
          <StateText>{player}</StateText>
        </StateBox>
        <StateBox>
          DRAW
          <StateText>{tie}</StateText>
        </StateBox>
        <StateBox>
          LOSE
          <StateText>{computer}</StateText>
        </StateBox>
      </ResultBox>
      {setCount ===5 || newarr[0]>=3 ?
       <RoundBox>
         {getResult(setPlayer,setComputer)}
      </RoundBox> :
      <RoundBox>
      <p>Now we are Round {results.length + 1} in [SET {setCount +1}]</p>
                    {results.map((item, i) => {
                      return (
                        <RoundContainer key={i}>
                          <Round>
                            <div
                              className={
                                item.result === "player" ? "winner" : ""
                              }
                            >
                              <RoundState>{item.player}</RoundState>
                            </div>
                            <RoundDiv>Round {i + 1}</RoundDiv>
                            <div
                              className={
                                item.result === "computer" ? "winner" : ""
                              }
                            >
                              <RoundState> {item.computer}</RoundState>
                            </div>
                          </Round>
                        </RoundContainer>
                      );
                    })}
      </RoundBox>}
    </ScoreCon>
  );
};

Scores.propTypes = {
  player: PropTypes.number,
  tie: PropTypes.number,
  computer: PropTypes.number,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.string,
      computer: PropTypes.string,
      key: PropTypes.string,
      result: PropTypes.string
    })
  )
};

export default Scores;
