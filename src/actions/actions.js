const actions = {
  gameStart: isStarted => {
    return {
      type: "START_GAME",
      isStarted
    };
  },
  setUserChoice: (user, choice) => {
    return {
      type: "USER_CHOICE",
      user,
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
  // TimeCount 처리
};

export default actions;
