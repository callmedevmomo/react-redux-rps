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
    tie: 0,
    setCount:0,
    setPlayer:0,
    setComputer:0,
    setTie:0,
  },
  userChoice: "",
  computerChoice: "",
  gameStop: "",
  rsp
};

const game = (state = initialize, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStarted: action.isStarted,
        gameStop: ""
      };
    case "USER_CHOICE":
      return { ...state, userChoice: action.choice };
    case "COMPUTER_CHOICE":
      return { ...state, computerChoice: action.choice };
    case "SET_SCORES":
      return {
        ...state,
        scores: action.scores || initialize.scores,
        gameStop: ""
      };
    case "STOP_SCORES":
      return { ...state, gameStop: action.gameStop };
    case "EVAL_RESULT":
      return { ...state, scores: action.data.scores };
    default:
      return state;
  }
};
export default game;
