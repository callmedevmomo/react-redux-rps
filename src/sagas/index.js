import { put, takeEvery, select, all,call } from "redux-saga/effects";

const rsp = {
  rock: { beats: ["scissors"] },
  paper: { beats: ["rock"] },
  scissors: { beats: ["paper"] }
};
let defaultTime = 15;
let isCounted = false;
function* gameStart() {
  isCounted=false;
  defaultTime=15;
 let repeat =  yield call(setInterval, () => {
    defaultTime-=1;
    if(defaultTime===0){
      alert("TIME OUT RESTART GAME")
      clearInterval(repeat);
      defaultTime=15;
    }
    else if(isCounted===true){
      clearInterval(repeat);
      defaultTime=15;
    }
  }, 1000);
   
  yield put({type:"TIME_COUNT",time:defaultTime})
  yield put({ type: "START_GAME", isStarted: true });
  yield put({ type: "COMPUTER_CHOICE", choice: undefined });
}

function* gameStop() {
  let gameResult;
  const data = JSON.parse(localStorage.getItem("Now Playing!"));
  const { player, computer } = data;
  if (player > computer) {
    gameResult = "Win";
  } else if (player < computer) {
    gameResult = "Lose";
  } else {
    gameResult = "Draw";
  }
  yield put({ type: "STOP_SCORES", stopResult: "" });
  yield put({ type: "STOP_SCORES", stopResult: gameResult });
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
    if(newScores.results.length===3 || newScores.player===2||newScores.computer===2){
      
      if(newScores.player>newScores.computer){
        newScores.setPlayer+=1;
      }
      else if(newScores.player===newScores.computer){
        newScores.setTie+=1;
      }
      else if(newScores.player<newScores.computer){
        newScores.setComputer+=1;
      }

      newScores.setCount+=1;
      newScores.player=0;
      newScores.computer=0;
      newScores.tie=0;
      newScores.results=[];
    }
    
    localStorage.setItem(score.key, JSON.stringify(newScores));
   
    console.log(`new Score results:`);
    console.log(newScores.results);
    console.log(newScores)
    console.log(`state :`);
    console.log(state);
    console.log(`score : `);
    console.log(score);

    return { ...state, scores: newScores };
    

  };
  isCounted=true;
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
