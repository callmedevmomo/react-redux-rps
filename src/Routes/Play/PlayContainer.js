import PlayPresenter from "./PlayPresenter";
import { connect } from "react-redux";
import actions from "../../action";

const mapStateToProps = state => {
  let items = [];
  let stopResult;
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
    startGame: () => dispatch(actions.startAsync()),
    resetLocal: () => dispatch(actions.resetAsync()),
    stopRps: () => dispatch(actions.stopAsync()),
    NowPlay: item => dispatch(actions.nowAsync(item)),
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
