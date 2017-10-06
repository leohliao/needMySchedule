import {combineReducers} from 'redux';
import todosReducers from './todos_reducer';

const rootReducer = (todosReducers) => {
  combineReducers {
    todosReducers
  }
}

export default rootReducer;
