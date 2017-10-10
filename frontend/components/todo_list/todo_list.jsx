import React from 'react';

class TodoList extends React.Component {

  render(){
    const { todos } = this.props;
    console.log(this.props);
    const ListAllTodos = todos.map(todo => (
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
