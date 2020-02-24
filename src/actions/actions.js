const actions = {
  gameStart: isStarted => {
    return {
      type: "START_GAME",
      isStarted
    };
  },
  startAsync: () => {
    return {
      type: "START_ASYNC"
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
  stopAsync: () => {
    return {
      type: "STOP_ASYNC"
    };
  },
  resetAsync: () => {
    return {
      type: "RESET_ASYNC"
    };
  },
  nowAsync: item => {
    return {
      type: "NOW_ASYNC",
      item
    };
  }
};

export default actions;
