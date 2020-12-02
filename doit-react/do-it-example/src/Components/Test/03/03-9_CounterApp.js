import React, { Component } from 'react';
import Counter2 from './03-9_Counter2.js'

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({count}) => ({count : count + 1}));
  }

  render() {
    return (
      <div>
        CounterApp
        <Counter2 count={this.state.count} onAdd={this.increaseCount} />
      </div>
    );
  }
}

export default CounterApp;
