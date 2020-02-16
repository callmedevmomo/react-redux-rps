import PlayPresenter from "./PlayPresenter";
import { connect } from "react-redux";
import actions from "../../shared/actions";

//redux & react magic here!

let shuffleInterval;

let items = [];
let stopResult;

const shuffle = dispatch => {
  shuffleInterval = setInterval(() => {
    dispatch(actions.setComputerChoice(randomComResult()));
  }, 200);
};

const randomComResult = () => {
  return items[Math.floor(Math.random() * items.length)];
};

const startGame = dispatch => {
  dispatch(actions.gameStart(true));
  shuffle(dispatch);
};

const resetLocal = dispatch => {
  stopResult = "";
  dispatch(actions.setScores(localStorage.removeItem("Now Playing!")));
};

const stopRps = dispatch => {
  dispatch(
    actions.stopScores(JSON.parse(localStorage.getItem("Now Playing!")))
  );
};
const NowPlay = (dispatch, human) => {
  clearInterval(shuffleInterval);
  const computer = randomComResult();
  dispatch(actions.gameStart(false));
  dispatch(actions.setComputerChoice(computer));
  dispatch(actions.setUserChoice(human));
  dispatch(actions.evaluateResult("Now Playing!"));
};

const mapStateToProps = state => {
  items = state.items;
  stopResult = state.stopResult;
  return {
    items,
    gameStarted: state.gameStarted,
    scores: state.scores,
    userChoice: state.userChoice,
    computerChocie: state.computerChocie,
    stopResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => startGame(dispatch),
    resetLocal: () => resetLocal(dispatch),
    stopRps: () => stopRps(dispatch),
    NowPlay: item => NowPlay(dispatch, item),
    setGameScores: () =>
      dispatch(
        actions.setScores(JSON.parse(localStorage.getItem("Now Playing!")))
      )
  };
};

const PlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayPresenter);

export default PlayContainer;
