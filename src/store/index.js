import {createStore, applyMiddleware, compose   } from 'redux';
import reducer from './reducers';
import { logger, createComment } from '../middleware';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(createComment, logger),
    // other store enhancers if any
);

const store = createStore(reducer, enhancer);

export default store;
