import React from 'react';
import NavBar from './componentsReact/navbar/NavBar';
import Home from './componentsReact/homeComp/Home';
import Exercise from './componentsReact/exerciseComp/Exercise';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  handlePage = (pageRecived) => {
    this.setState({
      page: pageRecived
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar handlePage={this.handlePage} />
        {this.state.page === 1
          ? <Home />
          : <Exercise />
        }
      </div>
    )
  }
}

export default App;
