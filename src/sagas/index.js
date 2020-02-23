import actions from "../action";
import { call, put, takeEvery, all, take } from "redux-saga/effects";

export function startGame(action) {
  console.log(action);
}
export default function* rootSaga() {
  yield takeEvery("START_GAME", startGame);
}
