import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Timer from "./Timer"

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

const TimerContainer = styled.div`
position:absolute;
  top:100px;
  left:190px;
  width:1300px;
  color:black;
  font-size:40px;
  display:flex;
  justify-content:center;
  align-items:center;

`;

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(item) {
    const {
      target: { value }
    } = item;
    this.props.selectChoice(value);
  }
  render() {
    const { gameStarted, items, current } = this.props;
    return (
      <PlayCon>
        <PlayHeader>User</PlayHeader>
        <PlayBoard>
          {gameStarted ? (
            <>
            <TimerContainer>
            <Timer></Timer>
            </TimerContainer>
            <BtnBox>
              {items.map((item, i) => (
                 <ChoiceBtn key={i} value={item} onClick={this.handleSelect}>
                  {item}
                </ChoiceBtn>
              ))}
            </BtnBox>
            </>
          ) : (
            <PlayChocie>
              <ChocieSpan>{current}</ChocieSpan>
            </PlayChocie>
          )}
        </PlayBoard>
      </PlayCon>
    );
  }
}

Player.propTypes = {
  gameStarted: PropTypes.bool,
  items: PropTypes.array,
  current: PropTypes.string,
  selectChoice: PropTypes.func
};
