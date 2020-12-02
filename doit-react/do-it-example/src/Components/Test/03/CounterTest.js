import React, { Component } from 'react';
import Counter from './Counter';
import NewCounter from './NewCounter';


class CounterTest extends Component {
  constructor(props) {
    super(props);
    
    this.state = {count : 10};
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState((prevState) => ({
      count : prevState.count + 10
    }));
  }

  render() {
    return (
      <>
      <Counter count={this.state.count} />
      <NewCounter count={this.state.count} />
    <div><button onClick={this.resetCount}>RESET TO {this.state.count + 10} </button></div>
      </>
    );
  }
}

export default CounterTest;
