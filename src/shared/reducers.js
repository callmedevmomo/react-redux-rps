import { rsp } from "./rspModel";

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
  rsp: rsp
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
  const newScores = Object.assign({}, state.scores, {
    results: [...state.scores.results, score],
    [score.result]: state.scores[score.result] + 1
  });
  localStorage.setItem(score.key, JSON.stringify(newScores));
  return Object.assign({}, state, { scores: newScores });
};

const game = (state = initialize, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return Object.assign({}, state, { items: action.items });
    case "START_GAME":
      return Object.assign({}, state, { gameStarted: action.isStarted });
    case "USER_CHOICE":
      return Object.assign({}, state, { userChoice: action.choice });
    case "COMPUTER_CHOICE":
      return Object.assign({}, state, { computerChocie: action.choice });
    case "SET_SCORES":
      return Object.assign({}, state, {
        scores: action.scores || initialize.scores
      });
    case "EVAL_RESULT":
      return evaluateResult(state, action);
    default:
      return state;
  }
};
export default game;
