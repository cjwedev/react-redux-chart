import { all, fork } from 'redux-saga/effects';
import vatSaga from './vat';

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export default function* rootSaga() {
  yield all([fork(vatSaga)]);
}
