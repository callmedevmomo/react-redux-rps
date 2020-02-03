const actions = {
  setItems: items => {
    return {
      type: "SET_ITEMS",
      items
    };
  },
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
  }
};

export default actions;
