import React from 'react';

class TodoListItem extends React.Component {
  render() {
    const {todo} = this.props
    return (
      <div>
        <li>
          {todo.title}
        </li>
      </div>
    );
  }// end render
} // end class

export default TodoListItem;
