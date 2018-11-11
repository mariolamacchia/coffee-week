import { 
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {
  reducer as CoffeeWeek,
  NAMESPACE as COFFEE_WEEK,
} from './CoffeeWeek/CoffeeWeekRedux';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default createStore(
  combineReducers({
    [COFFEE_WEEK]: CoffeeWeek,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);
