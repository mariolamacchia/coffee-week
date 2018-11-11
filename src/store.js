import { createStore, combineReducers } from 'redux';
import {
  reducer as CoffeeWeek,
  NAMESPACE as COFFEE_WEEK,
} from './CoffeeWeek/CoffeeWeekRedux';

/* eslint-disable no-underscore-dangle */
export default createStore(
  combineReducers({
    [COFFEE_WEEK]: CoffeeWeek,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
