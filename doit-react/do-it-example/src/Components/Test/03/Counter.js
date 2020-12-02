import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {count : props.count};
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
        Counter <br/>
        {this.state.count}
        <button onClick={this.counterClickHandler} >INCREASE COUNT</button>
      </div>
    );
  }
}

export default Counter;
