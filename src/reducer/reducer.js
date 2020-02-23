const rsp = {
  rock: { beats: ["scissors"] },
  paper: { beats: ["rock"] },
  scissors: { beats: ["paper"] }
};

const initialize = {
  items: Object.keys(rsp),
  gameStarted: false,
  scores: {
    results: [],
    player: 0,
    computer: 0,
    tie: 0
  },
  userChoice: "",
  computerChocie: "",
  stopResult: "",
  rsp
};

const evaluateResult = (state, action) => {
  let result;
  if (state.userChoice === state.computerChocie) {
    result = "tie";
  } else if (
    state.rsp[state.userChoice].beats.indexOf(state.computerChocie) !== -1
  ) {
    result = "player";
  } else {
    result = "computer";
  }
  return setResults(
    {
      player: state.userChoice,
      computer: state.computerChocie,
      key: action.key,
      result
    },
    state
  );
};
const setResults = (score, state) => {
  const newScores = {
    ...state.scores,
    results: [...state.scores.results, score],
    [score.result]: state.scores[score.result] + 1
  };

  localStorage.setItem(score.key, JSON.stringify(newScores));
  return { ...state, scores: newScores };
};
const stopResult = (state, action) => {
  const {
    stopResult: { player, computer }
  } = action;
  let setValue;
  if (player > computer) {
    setValue = "Win";
  } else if (player < computer) {
    setValue = "Lose";
  } else {
    setValue = "Draw";
  }

  return { ...state, stopResult: setValue };
};

const game = (state = initialize, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStarted: action.isStarted,
        stopResult: ""
      };
    case "USER_CHOICE":
      return { ...state, userChoice: action.choice };
    case "COMPUTER_CHOICE":
      return { ...state, computerChocie: action.choice };
    case "SET_SCORES":
      return {
        ...state,
        scores: action.scores || initialize.scores,
        stopResult: ""
      };

    // 순수함수만 뱉는 리듀서
    case "STOP_SCORES":
      return stopResult(state, action);
    case "EVAL_RESULT":
      return evaluateResult(state, action);
    default:
      return state;
  }
};
export default game;
