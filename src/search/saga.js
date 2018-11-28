import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as a from '../store/actions';

import * as destinationService from '../services/destinations';

function* onDestionationSearch({ searchTerm }){
    try{
      const destinations = yield call(destinationService.find, searchTerm);
      yield put({
        type: a.FIND_DESTINATION.SUCCESS, 
        list: destinations
      })
    } catch (e){
      yield put({
        type: a.FIND_DESTINATION.FAILURE,
        error: e.message
      })
    }
}

export default all([
    takeLatest(a.FIND_DESTINATION.REQUEST, onDestionationSearch)
]);