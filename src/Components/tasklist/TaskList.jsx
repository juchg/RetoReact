import React, { useState } from 'react';
import './TaskList.css';
import Task from '../task/Task';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  const handleTaskChanged = (e) => {
    setTask(e.target.value);
  }

  const handleAddTask = () => {
    if (task) {
      if(!items.find(item => item.task === task)){
        setItems(prevItems => [
          ...prevItems,
          { task }
        ]);
        setTask("");
      }
      else{
        Alertify.alert('Tarea repetida', 'Ya se encuentra una tarea igual en la lista de tareas');
        setTask("");
      }
    }
    else {
      Alertify.alert('Campo vacio', 'Se deben de llenar todos los campos para continuar');
    }
  }

  const handleDeleteTask = (taskRecived) => {
    Alertify.confirm('¿Esta seguro de borrar esta tarea?', () => { 
      setItems(prevItems =>
        [...prevItems.filter(item => item.task !== taskRecived)]
      );
    });
  }
  
  const handleEditTask = (taskRecived) => {
    Alertify.prompt('Editar tarea', taskRecived, (evt, value) => { 
      items.forEach(element => {
        if(element.task === taskRecived){
          element.task = value;
        }
      });
      setTask("s");      
      setTask(""); 
    });
  }

  return (
    <div id="task-list">
      <h1>TaskList</h1>
      <br />
      <div>
        <input type="text" value={task} onChange={handleTaskChanged} />
        <button className="btn" type="button" onClick={handleAddTask} >Agregar</button>
      </div>
      <div id="task-container">
        {items.map((item, index) => (
          <Task key={index} index={index} task={item.task} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} />
        ))}
      </div>
    </div>
  )
}

export default TaskList;