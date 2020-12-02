import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter2 extends Component {
render() {
    return (
      <>
      <div>count : {this.props.count}</div>
      <button onClick={this.props.onAdd}>INCREASE COUNT</button>
      </>
    );
  }
}

Counter2.propTypes = {
  count : PropTypes.number,
  onAdd : PropTypes.func
}

export default Counter2;
