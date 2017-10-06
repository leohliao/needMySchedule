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
  switch (action.type) {
    case RECEIVE_TODOS:
      const nextState = {};
      actions.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo};
      merge({}, state, newTodo);
    default:
      return state;
  }
}

export default todosReducers;
