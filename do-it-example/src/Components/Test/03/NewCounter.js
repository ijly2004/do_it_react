import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.counterClickHandler = this.counterClickHandler.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[NewCounter] getDerivedStateFromProps');
    const { count } = props;
      return {
      count,
      newCount: count === state.count ? state.newCount : count
    }
  }

  counterClickHandler () {
    this.setState(prevState=> ({
      newCount : prevState.newCount + 1
    }));
  }

  render() {
    return (
      <div>
        NewCounter<br/>
        {this.state.newCount}
        <button onClick={this.counterClickHandler}>INCREASE COUNT</button>
      </div>
    );
  }
}

export default NewCounter;
