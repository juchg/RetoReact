import React from 'react';
import './App.css';
import NavBar from './Components/Nav-bar/Nav-bar';
import Home from './Components/Home/Home';
import Exercise from './Components/Exercise/Exercise';

class App extends React.Component {

  state = {
    page: 1
  }

  handlePage = (pageRecived) => {
    this.setState({
      page: pageRecived
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar handlePage={this.handlePage}/>
        {this.state.page===1 
        ? <Home/> 
        : <Exercise/> }
      </div>
    )
  }
}

export default App;
