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
    case "STOP_SCORES":
      return { ...state, stopResult: action.stopResult };
    case "EVAL_RESULT":
      return { ...state, scores: action.data.scores };
    default:
      return state;
  }
};
export default game;
