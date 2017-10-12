import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {

  render(){
    const { todos } = this.props;
    console.log(this.props);
    const ListAllTodos = todos.map(todo => (
        <TodoListItem 
          key={todo.id}
          todo={todo}
          receiveTodo={receiveTodo} />
    ))
    return (
      <div>
        <ul>
          {ListAllTodos}
        </ul>
      </div>
    )//end return
  }//end render
} //end TodoList

export default TodoList;
