import PlayPresenter from "./PlayPresenter";
import { connect } from "react-redux";
import actions from "../../actions";

const mapStateToProps = state => {
  let items = [];
  let gameStop;
  items = state.items;
  gameStop = state.gameStop;
  return {
    items,
    gameStarted: state.gameStarted,
    scores: state.scores,
    userChoice: state.userChoice,
    computerChoice: state.computerChoice,
    gameStop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(actions.startGame()),
    resetLocal: () => dispatch(actions.resetGame()),
    stopRps: () => dispatch(actions.stopGame()),
    NowPlay: item => dispatch(actions.nowGame(item)),
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
