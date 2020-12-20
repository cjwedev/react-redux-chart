import { all, call, put, takeEvery } from 'redux-saga/effects';
import { callApi } from './api';
import {
  VAT_START,
  VAT_DONE,
  VAT_ERROR
} from '../actions/vat';

const API_ENDPOINT = 'https://api.vatcomply.com';

export function* handleDate(action) {
  try {
    const payload = action.payload;

    const url = API_ENDPOINT + '/rates?date=' + 
      `${payload.date.getFullYear()}-${payload.date.getMonth()}-${payload.date.getDate()}`;

    const res = yield call(callApi, 'get', url);

    if (res.error) {
      yield put({type: VAT_ERROR});
    } else {
      // this is demonstration, so remove some peak data
      delete res.rates['IDR'];
      delete res.rates['ISK'];
      delete res.rates['KRW'];
      delete res.rates['HUF'];

      yield put({type: VAT_DONE, payload: res.rates});
    }
  } catch (err) {
    yield put({type: VAT_ERROR});
  }
}

export function* watchVat() {
  yield takeEvery(VAT_START, handleDate);
}

// We can also use `fork()` here to split our saga into multiple watchers.
export default function* vatSaga() {
  yield all([watchVat()]);
}
