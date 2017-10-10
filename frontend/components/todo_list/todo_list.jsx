import React from 'react';

class TodoList extends React.components {
  render(){
    const {todos} = this.props;
    const ListAllTodos = todos.map((todo, id) => (
      <li key={todo.id}>
        {todo.title}
      </li>
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
