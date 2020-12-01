import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {count : 0};
    this.counterClickHandler = this.counterClickHandler.bind(this);
  }

  counterClickHandler () {
    this.setState(prevState=> ({
      count : prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.counterClickHandler} >CLICK ME</button>
      </div>
    );
  }
}

export default Counter;
