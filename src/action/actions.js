export const START_GAME = "START_GAME";
export const USER_CHOICE = "USER_CHOICE";
export const COMPUTER_CHOICE = "COMPUTER_CHOICE";
export const EVAL_RESULT = "EVAL_RESULT";
export const SET_SCORES = "SET_SCORES";
export const STOP_SCORES = "STOP_SCORES";

export const actions = {
  gameStart: isStarted => {
    return {
      type: START_GAME,
      isStarted
    };
  },
  setUserChoice: choice => {
    return {
      type: USER_CHOICE,
      choice
    };
  },
  setComputerChoice: choice => {
    return {
      type: COMPUTER_CHOICE,
      choice
    };
  },
  evaluateResult: key => {
    return {
      type: EVAL_RESULT,
      key
    };
  },
  setScores: scores => {
    return {
      type: SET_SCORES,
      scores
    };
  },
  stopScores: stopResult => {
    return {
      type: STOP_SCORES,
      stopResult
    };
  }
};
