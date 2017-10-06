import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
  id: 1,
  title: 'wash car',
  body: 'with soap',
  done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducers = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});
    default:
      return state;
  }
}

export default todosReducers;
