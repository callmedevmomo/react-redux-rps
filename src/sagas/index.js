import { put, takeEvery, select, all } from "redux-saga/effects";

const rsp = {
  rock: { beats: ["scissors"] },
  paper: { beats: ["rock"] },
  scissors: { beats: ["paper"] }
};

function* gameStart() {
  yield put({ type: "START_GAME", isStarted: true });
  yield put({ type: "COMPUTER_CHOICE", choice: "Shuffle" });
}

function* gameStop() {
  let setValue;
  const data = JSON.parse(localStorage.getItem("Now Playing!"));
  const { player, computer } = data;
  if (player > computer) {
    setValue = "Win";
  } else if (player < computer) {
    setValue = "Lose";
  } else {
    setValue = "Draw";
  }
  yield put({ type: "STOP_SCORES", stopResult: "" });
  yield put({ type: "STOP_SCORES", stopResult: setValue });
}

function* gameReset() {
  localStorage.removeItem("Now Playing!");
  yield put({ type: "SET_SCORES" });
}

const randomComResult = () => {
  let items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
};

function* nowGame(action) {
  let result;
  const setKey = "Now Playing!";
  const state = yield select();
  const computer = randomComResult();
  if (action.item === computer) {
    result = "tie";
  } else if (rsp[action.item].beats.indexOf(computer) !== -1) {
    result = "player";
  } else {
    result = "computer";
  }
  const score = {
    player: action.item,
    computer,
    key: setKey,
    result
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
  yield put({ type: "START_GAME", isStarted: false });
  yield put({ type: "COMPUTER_CHOICE", choice: computer });
  yield put({ type: "USER_CHOICE", choice: action.item });
  yield put({ type: "EVAL_RESULT", data: setResults(score, state) });
}

function* handleSaga() {
  yield takeEvery("GAME_START", gameStart);
  yield takeEvery("GAME_STOP", gameStop);
  yield takeEvery("GAME_RESET", gameReset);
  yield takeEvery("NOW_GAME", nowGame);
}

export default function* rootSaga() {
  yield all([handleSaga()]);
}
