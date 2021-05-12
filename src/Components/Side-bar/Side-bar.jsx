import React from 'react';
import './Side-bar.css'


class SideBar extends React.Component{


  ChangeExercise(exercise){   
    //marcamos el seleccionado
    if(exercise===1){
      document.getElementById("counter-tab").className="btn-selected";
      document.getElementById("task-list-tab").className="btn";
    }
    else{
        document.getElementById("counter-tab").className="btn";
        document.getElementById("task-list-tab").className="btn-selected";
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
          </div>
        </div>
      )
  }
}

export default SideBar;