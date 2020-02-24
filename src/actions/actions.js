const actions = {
  gameStart: isStarted => {
    return {
      type: "START_GAME",
      isStarted
    };
  },
  setUserChoice: choice => {
    return {
      type: "USER_CHOICE",
      choice
    };
  },
  setComputerChoice: choice => {
    return {
      type: "COMPUTER_CHOICE",
      choice
    };
  },
  evaluateResult: data => {
    return {
      type: "EVAL_RESULT",
      data
    };
  },
  setScores: scores => {
    return {
      type: "SET_SCORES",
      scores
    };
  },
  stopScores: stopResult => {
    return {
      type: "STOP_SCORES",
      stopResult
    };
  },
  startGame: () => {
    return {
      type: "GAME_START"
    };
  },
  stopGame: () => {
    return {
      type: "GAME_STOP"
    };
  },
  resetGame: () => {
    return {
      type: "GAME_RESET"
    };
  },
  nowGame: item => {
    return {
      type: "NOW_GAME",
      item
    };
  }
};

export default actions;
