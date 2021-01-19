import React, { Suspense, lazy } from 'react'

import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createHashHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

//REDUX
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import reducers from './redux/reducers'
import sagas from './redux/sagas'

import App from './App'




const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]
// if (process.env.NODE_ENV === 'development') {
middlewares.push(logger)





  const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
  sagaMiddleware.run(sagas)


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={props => <App {...props} />} history={history} />
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
