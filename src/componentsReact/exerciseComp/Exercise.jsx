import React from 'react';
import './Exercise.css';
import SideBar from '../sidebar/SideBar';
import Counter from '../counterComp/Counter';
import TaskList from '../tasklist/TaskList';
import Pokedex from '../pokedex/Pokedex';

class Exercise extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      exercise : 1
    }
  }

  handleExercise = (exerciseRecived) => {
    this.setState({
      exercise: exerciseRecived
    });
  }

  renderSwitch(exercise){
    switch (exercise) {
      case 1:
        return <Counter maxValue={18} />
        break;
      case 2:
        return <TaskList/>
        break;
      case 3:
        return <Pokedex/>
        break;
      default:
        return alert("Error al mostrar la ventana");
        break;
    }
  }

  render() {
      return (
        <div id="exercise">
          <SideBar handleExercise={this.handleExercise} />          
          <div className="container">
            {this.renderSwitch(this.state.exercise)}
          </div>
        </div>
      )
  }
}

export default Exercise;