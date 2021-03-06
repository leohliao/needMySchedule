import {connect} from 'react-redux';
import { allTodos } from '../../reducers/selector';
import {receiveTodos, receiveTodo} from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state) => {
  console.log(allTodos(state));
return ({
    todos: allTodos(state)
  })
};

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (TodoList);
