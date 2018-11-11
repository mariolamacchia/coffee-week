import { List, Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchEmployees as fetchEmployeesApi } from './EmployeesApi';

// Action names
export const NAMESPACE = 'CoffeeWeek';
const FETCH_EMPLOYEES_REQUEST = `${NAMESPACE}/FETCH_EMPLOYEES_REQUEST`;
const FETCH_EMPLOYEES_SUCCESS = `${NAMESPACE}/FETCH_EMPLOYEES_SUCCESS`;
const FETCH_EMPLOYEES_FAIL = `${NAMESPACE}/FETCH_EMPLOYEES_FAIL`;
const SHUFFLE = `${NAMESPACE}/SHUFFLE`;

// State
const State = Record({
  employees: [],
  error: null,
  loading: true,
  shuffleCount: 0,
});

// Reducer
export const reducer = handleActions({
  [FETCH_EMPLOYEES_REQUEST]: state => state.merge({
    error: null,
    employees: [],
    loading: true,
  }),
  [FETCH_EMPLOYEES_SUCCESS]: (state, { payload }) => state.merge({
    error: null,
    employees: List(payload.data.users),
    loading: false,
  }),
  [FETCH_EMPLOYEES_FAIL]: (state, { payload }) => state.merge({
    error: payload,
    loading: false,
  }),
  [SHUFFLE]: state => state.merge({ shuffleCount: state.shuffleCount + 1 }),
}, new State());

// Actions
const fetchEmployeesRequest = createAction(FETCH_EMPLOYEES_REQUEST);
const fetchEmployeesSuccess = createAction(FETCH_EMPLOYEES_SUCCESS);
const fetchEmployeesFail = createAction(FETCH_EMPLOYEES_FAIL);
export const shuffleEmployees = createAction(SHUFFLE);
export function fetchEmployees() {
  return (dispatch) => {
    dispatch(fetchEmployeesRequest());
    fetchEmployeesApi()
      .then(employees => dispatch(fetchEmployeesSuccess(employees)))
      .catch(error => dispatch(fetchEmployeesFail(error.message)));
  };
}

// Selectors
const getState = state => state[NAMESPACE];
const getShuffleCount = createSelector(getState, state => state.shuffleCount);
const getEmployees = createSelector(getState, state => List(state.employees));
export const getError = createSelector(getState, state => state.error);
export const isLoading = createSelector(getState, state => state.loading);
export const getRandomEmployeesPairs = createSelector(
  getEmployees, getShuffleCount, (employees) => {
    // shuffle employee list
    const shuffledList = employees.sortBy(Math.random);

    return shuffledList
      // get pairs of employees
      .map((employee, index) => ([employee, shuffledList.get((index + 1) % shuffledList.size)]))
      // order pairs alphabetically
      .sort(([employee]) => employee);
  },
);
