import React from 'react';
import './Exercise.css';
import SideBar from '../Side-bar/Side-bar';
import Counter from '../Counter/Counter';
import TaskList from '../Task-list/Task-list';
import tasksExample from '../../Samples/task.json';

class Exercise extends React.Component{

  state = {
    exercise : 1,
    task: tasksExample
  }

  handleExercise = (exerciseRecived) => {
    this.setState({
      exercise: exerciseRecived
    });
  }

  render() {
      return (
        <div id="exercise">
          <SideBar handleExercise={this.handleExercise} />          
          <div className="container">
            {this.state.exercise===1 
              ? <Counter maxValue={18}/> 
              : <TaskList tasks={this.state.task}/> 
            }
          </div>
        </div>
      )
  }
}

export default Exercise;