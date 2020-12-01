import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue
    } = this.props;

    console.log(this.props);
    return (
    <div name="name">
      <span>1 : {String(boolValue)}<br/></span>
      <span>2 : {numValue}<br/></span>
      <span>3 : {arrayValue}<br/></span>
    </div>
    );
  }
}

PropsComponent.propTypes = {
  boolValue:PropTypes.bool,
  numValue:PropTypes.number,
  arrayValue:PropTypes.arrayOf(PropTypes.number)
};


export default PropsComponent;