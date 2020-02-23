import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  START_GAME,
  USER_CHOICE,
  COMPUTER_CHOICE,
  EVAL_RESULT,
  SET_SCORES,
  STOP_SCORES
} from "../action";
