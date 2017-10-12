import React from 'react';

class TodoListItem extends React.Component {
  render() {
    const {todo} = this.props
    return (
      <div>
        {todo.title}
      </div>
    );
  }// end render
} // end class

export default TodoListItem;
