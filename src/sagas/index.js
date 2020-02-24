import { put, takeEvery, select } from "redux-saga/effects";

const rsp = {
  rock: { beats: ["scissors"] },
  paper: { beats: ["rock"] },
  scissors: { beats: ["paper"] }
};

export function* startAsync() {
  yield put({ type: "START_GAME", isStarted: true });
  yield put({ type: "COMPUTER_CHOICE", choice: "Shuffle" });
}
export function* stopAsync(action) {
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

export function* resetAsync() {
  localStorage.removeItem("Now Playing!");
  yield put({ type: "SET_SCORES" });
}

const randomComResult = () => {
  let items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
};

export function* nowAsync(action) {
  const setKey = "Now Playing!";
  const computer = randomComResult();
  let result;
  if (action.item === computer) {
    result = "tie";
  } else if (rsp[action.item].beats.indexOf(computer) !== -1) {
    result = "player";
  } else {
    result = "computer";
  }
  const arg1 = {
    player: action.item,
    computer,
    key: setKey,
    result
  };
  const state = yield select();

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
  yield put({ type: "EVAL_RESULT", key: setResults(arg1, state) });
}

export default function* rootSaga() {
  yield takeEvery("START_ASYNC", startAsync);
  yield takeEvery("STOP_ASYNC", stopAsync);
  yield takeEvery("RESET_ASYNC", resetAsync);
  yield takeEvery("NOW_ASYNC", nowAsync);
}