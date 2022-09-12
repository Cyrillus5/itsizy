import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducer'
import getSearch from '../../Middlewares/getSearch';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(getSearch),
);

const store = createStore(reducer, enhancers);

export default store;