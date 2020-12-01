import React from 'react';
import PropTypes from 'prop-types';
import PropsComponent from './PropsComponent';

const DefaultPropsComponent = (props) => {
  return (
    <div>
      DefaultPropsComponent<br/>
      1 : {String(props.boolValue)}<br/>
      2 : {String(props.boolValueWithoutDefault)}
    </div>
  );
};

export default DefaultPropsComponent;

DefaultPropsComponent.defaultProps = {
  boolValue : PropTypes.bool,
  boolValueWithoutDefault : PropTypes.bool
};

DefaultPropsComponent.defaultProps = {
  boolValue : false
};