import {
    all,
    takeEvery,
    put,
    call,
    delay,
    select
} from 'redux-saga/effects'

import actions from './actions'

function* getInitialState(){
  yield put({
    type : 'data/SET_STATE',
    payload : {
      loading_initialState: true
    }
  })

  const dados = {id:'passou'}
  yield put({
    type : 'data/SET_STATE',
    payload : {
      initialState: dados
  }
  })



  yield put({
    type : 'data/SET_STATE',
    payload : {
      loading_initialState: false
    }
  })
}

export default function* rootSaga() {
    yield all([
      takeEvery(actions.getInitialState, getInitialState),
      getInitialState()
    ])
  }
  