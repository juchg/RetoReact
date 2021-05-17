import React from 'react';
import './SideBar.css'


class SideBar extends React.Component{


  ChangeExercise(exercise){   
    //marcamos el seleccionado
    switch (exercise) {
      case 1:
        document.getElementById("counter-tab").className="btn-selected";
        document.getElementById("task-list-tab").className="btn";
        document.getElementById("pokemon-tab").className="btn";
        break;
      case 2:
        document.getElementById("counter-tab").className="btn";
        document.getElementById("task-list-tab").className="btn-selected";
        document.getElementById("pokemon-tab").className="btn";        
      break;
      case 3:
        document.getElementById("counter-tab").className="btn";
        document.getElementById("task-list-tab").className="btn";
        document.getElementById("pokemon-tab").className="btn-selected";        
        break;
    }
    const { handleExercise } = this.props;
    handleExercise(exercise);
  }

  render() {
    return (
      <div id="side-bar">
        <div id="buttons-container">
            <button className="btn-selected" id="counter-tab" onClick={() => this.ChangeExercise(1)}>Counter</button>
            <button className="btn" id="task-list-tab" onClick={() => this.ChangeExercise(2)}>Task-List</button>
            <button className="btn" id="pokemon-tab" onClick={() => this.ChangeExercise(3)}>Pokedex</button>
        </div>
      </div>
    )
  }
}

export default SideBar;