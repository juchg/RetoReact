import React from 'react';
import './Task-list.css';
import Task from '../Task/Task';
import PropTypes from 'prop-types';

class TaskList extends React.Component{

  render() {
    return (
      <div id="task-list">
        <h1>Task-List</h1>
        {this.props.tasks.map(task => <Task key={task.id} task={task}/>)}
      </div>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default TaskList;