import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          task: this.props.task
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.StyleCompleted = this.StyleCompleted.bind(this);
    }

    //stilos de las tareas
    StyleCompleted(){
        return {
            fontSize: "20px",
            color: this.state.task.done? "gray" : "black",
            textDecoration: this.state.task.done? "line-through" : "none"
        }
    }

    /////////////////////
    //aun no puedo cambiar el estado de las tareas jaja
    /////////////////////
    handleClick() {
        var prevTask = this.state.task;
        prevTask.done = !prevTask.done;
        this.setState({task:prevTask});
      }
    
    render(){
        return <p style={this.StyleCompleted()}>
            {this.state.task.title}-
            {this.state.task.description}-
            {this.state.task.done?"Done":"Not done"}-
            {this.state.task.id}
            {/* <input type="checkbox"/> */}
            <button 
                style={this.state.task.done?btnDone:btnDontDone}
                title={this.state.task.done?"Marcar como no hecha":"marcar como hecha"}
            >
                {this.state.task.done?"X":"✓"}
            </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

//estilos en linea
const btnDontDone = {
    fontSize: '18px',
    fontWidth: 'bold',
    background: '#ea2027',
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "50%",
    cursor: "pointer"
}
const btnDone = {
    fontSize: '18px',
    fontWidth: 'bold',
    background: '#13FF00',
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "50%",
    cursor: "pointer"
}

export default Task;