import React, { Component } from "react";
import ComputerPlayer from "../../components/game/Computer";
import Player from "../../components/game/Player";
import Scores from "../../components/game/Score";
import styled from "styled-components";
import PropTypes from "prop-types";



const Wrapper = styled.div`
  margin-top: 40px;
`;
const BtnCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const Btn = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 25px;
  background-color: #c8d6e5;
  opacity: 0.9;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 16px;
`;
const AnotherBox = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RestartBtn = styled.button`
  margin-top: 20px;
  width: 70px;
  height: 50px;
  border-radius: 15px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
  :nth-child(2) {
    width: 100px;
    margin-left: 20px;
  }
`;

const Game = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StopBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StopState = styled.div`
  font-size: 20px;
  color: ${props => (props.current ? "black" : "transparent")};
  margin-left: 5px;
  font-weight: bolder;
`;



class PlayPresenter extends Component {
  render() {
    const {
      scores,
      gameStop,
      gameStarted,
      userChoice,
      computerChoice,
      items,
      resetLocal,
      startGame,
      stopRps,
      NowPlay
    } = this.props;
    return (
      <>
        <BtnCon>
          {scores.results.length >= 3 ||
          scores.player >= 2 ||
          scores.computer >= 2 ? (
            <>
              <RestartBtn onClick={resetLocal}>Reset</RestartBtn>
              <Btn onClick={startGame}>Next Set</Btn>

            </>
          ) : (
            <>

              <Btn onClick={startGame}>{scores.setCount===0 ? "START" : scores.setCount<=4 ? `${scores.setCount+1} SET START`
              : "FINISHED"} </Btn>
              <AnotherBox>
                <RestartBtn onClick={resetLocal}>Reset</RestartBtn>
                {scores.results.length !== 0 ? (
                  <RestartBtn onClick={stopRps}>Stop</RestartBtn>
                ) : (
                  <RestartBtn>Stop</RestartBtn>
                )}
              </AnotherBox>
              <StopBox>
                <StopState current={gameStop === "Win"}>Win</StopState>
                <StopState current={gameStop === "Draw"}>Draw</StopState>
                <StopState current={gameStop === "Lose"}>Lose</StopState>
              </StopBox>
            </>
          )}
        </BtnCon>
        <Wrapper>
          <Game>
            <Player
              gameStarted={gameStarted}
              current={userChoice}
              items={items}
              selectChoice={NowPlay}
            />
            <Scores
              player={scores.player}
              tie={scores.tie}
              computer={scores.computer}
              results={scores.results}
              setCount={scores.setCount}
              setPlayer={scores.setPlayer}
              setComputer={scores.setComputer}
              setTie={scores.setTie}
            />
            <ComputerPlayer current={computerChoice} />
          </Game>
        </Wrapper>
      </>
    );
  }
}
PlayPresenter.propTypes = {
  scores: PropTypes.object,
  gameStop: PropTypes.string,
  gameStarted: PropTypes.bool,
  userChoice: PropTypes.string,
  computerChoice: PropTypes.string,
  items: PropTypes.array,
  resetLocal: PropTypes.func,
  startGame: PropTypes.func,
  stopRps: PropTypes.func,
  NowPlay: PropTypes.func
};

export default PlayPresenter;
