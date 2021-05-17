import React from 'react';
import './Task.css';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            completed : false
        }
    }

    handleDelete(task){
        this.props.handleDeleteTask(task);
    }

    handleChangeStatus(){
        this.setState(prevState => ({
            completed : !prevState.completed
        }));
    }

    handleEdit(task){
        this.props.handleEditTask(task);
    }

    render(){
        const {index, task} =this.props;
        return(
            <div id="task" className={(this.state.completed) ? "completed" : "incompleted"}>
                <p><b>{index+1}.</b> {task} </p>
                <button onClick={() => this.handleDelete(task)} >Delete</button>
                <button onClick={() => this.handleEdit(task)}  >Edit</button>
                <button onClick={()=> this.handleChangeStatus()} >{(this.state.completed) ? "Incompleted" : "Completed"}</button>
            </div>
        )
    }
}

export default Task;