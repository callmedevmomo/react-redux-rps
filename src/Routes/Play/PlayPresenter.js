import React, { Component } from "react";
import ComputerPlayer from "../../shared/Computer";
import Player from "../../shared/Player";
import Scores from "../../shared/Score";
import styled from "styled-components";

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

//presenter Magic here!!

class PlayPresenter extends Component {
  componentWillMount() {
    this.props.setGameScores();
  }
  render() {
    return (
      <>
        <BtnCon>
          {this.props.scores.results.length >= 3 ||
          this.props.scores.player >= 2 ||
          this.props.scores.computer >= 2 ? (
            <>
              <RestartBtn onClick={this.props.resetLocal}>Reset</RestartBtn>
            </>
          ) : (
            <>
              <Btn onClick={this.props.startGame}>Start</Btn>
              <AnotherBox>
                <RestartBtn onClick={this.props.resetLocal}>Reset</RestartBtn>
                <RestartBtn onClick={this.props.stopRps}>Stop</RestartBtn>
              </AnotherBox>
              <StopBox>
                <StopState current={this.props.stopResult === "Win"}>
                  Win
                </StopState>
                <StopState current={this.props.stopResult === "Draw"}>
                  Draw
                </StopState>
                <StopState current={this.props.stopResult === "Lose"}>
                  Lose
                </StopState>
              </StopBox>
            </>
          )}
        </BtnCon>
        <Wrapper>
          <Game>
            <Player
              gameStarted={this.props.gameStarted}
              current={this.props.userChoice}
              items={this.props.items}
              selectChoice={this.props.NowPlay}
            />
            <Scores scores={this.props.scores} />
            <ComputerPlayer
              items={this.props.items}
              current={this.props.computerChocie}
            />
          </Game>
        </Wrapper>
      </>
    );
  }
}

export default PlayPresenter;
