import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selector';
import {receiveTodos, receiveTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
})

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
})

export default connect {
  mapStateToProps,
  mapDispatchToProps
}(TodoList);
