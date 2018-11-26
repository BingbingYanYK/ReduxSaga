import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as a from '../store/actions';

import * as paymentService from '../services/payment';

function* onDestinationSet() {
  const currencies = null; // TODO
  yield put({
    type: a.FIND_PAYMENT.REQUEST,
    currencies
  });
}

function* findPayment({ currencies }) {
  try {
    const list = yield call(paymentService.find, currencies);
    yield put({
      type: a.FIND_PAYMENT.SUCCESS,
      list
    });
  } catch (e) {
    yield put({
      type: a.FIND_PAYMENT.FAILURE,
      error: e.message
    });
  }
}

export default all([
  takeLatest(a.SET_DESTINATION, onDestinationSet),
  takeLatest(a.FIND_PAYMENT.REQUEST, findPayment)
]);
