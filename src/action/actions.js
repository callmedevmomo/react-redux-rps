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
  evaluateResult: key => {
    return {
      type: "EVAL_RESULT",
      key
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
  }
};

export default actions;
