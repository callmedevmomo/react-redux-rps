import React from "react";
import styled from "styled-components";

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
    text-decoration: underline;
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

const Scores = props => {
  return (
    <ScoreCon>
      <ResultBox>
        <StateBox>
          WIN
          <StateText>{props.scores.player}</StateText>
        </StateBox>
        <StateBox>
          DRAW
          <StateText>{props.scores.tie}</StateText>
        </StateBox>
        <StateBox>
          LOSE
          <StateText>{props.scores.computer}</StateText>
        </StateBox>
      </ResultBox>
      <RoundBox>
        {props.scores.player >= 2 ? (
          <h1>OMG You are Genius!!</h1>
        ) : (
          <>
            {props.scores.computer >= 2 ? (
              <h1>You are Lose! T_T</h1>
            ) : (
              <>
                {props.scores.results.length + 1 >= 4 ? (
                  <>
                    {props.scores.player === props.scores.computer ? (
                      <h1>Draw!</h1>
                    ) : props.scores.player > props.scores.computer ? (
                      <h1>OMG You are Genius!!</h1>
                    ) : (
                      <h1> You are Lose! T_T</h1>
                    )}
                  </>
                ) : (
                  <>
                    <p>Now we are Round {props.scores.results.length + 1}</p>
                    {renderScores(props.scores.results)}
                  </>
                )}
              </>
            )}
          </>
        )}
      </RoundBox>
    </ScoreCon>
  );
};

const renderScores = results => {
  // console.log(results);
  return results.map((item, i) => {
    // console.log(item);
    return (
      <RoundContainer key={i}>
        <Round>
          <div className={item.result === "player" ? "winner" : ""}>
            <RoundState>{item.player}</RoundState>
          </div>
          <RoundDiv>Round {i + 1}</RoundDiv>
          <div className={item.result === "computer" ? "winner" : ""}>
            <RoundState> {item.computer}</RoundState>
          </div>
        </Round>
      </RoundContainer>
    );
  });
};

export default Scores;
