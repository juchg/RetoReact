import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (this.state.count < this.props.maxValue) {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div id="counter">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Click here</button>
        {this.state.count === this.props.maxValue
          ? <span>
              <br/>You reach the limit<br/>
              <button id="reset" onClick={this.handleReset}>Reset</button>
            </span>
          : null
        }
        <p>The max value is {this.props.maxValue}</p>
      </div>
    )
  }
}

Counter.propType = {
  maxValue : PropTypes.number.isRequired   
}

export default Counter;