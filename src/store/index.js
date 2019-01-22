import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import logger from '../middleware/logger'
import createComment from '../middleware/randomid'
import api from '../middleware/api'
import { routerMiddleware } from 'connected-react-router'
import history from '../history'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history), createComment, api, logger)
  // other store enhancers if any
)

const store = createStore(reducer(history), enhancer)

export default store
