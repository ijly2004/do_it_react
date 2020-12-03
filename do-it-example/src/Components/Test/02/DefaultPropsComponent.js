import React from 'react';
import PropTypes from 'prop-types';

const DefaultPropsComponent = (props) => {
  return (
    <div>
      DefaultPropsComponent<br/>
      1 : {String(props.boolValue)}<br/>
      2 : {String(props.boolValueWithoutDefault)}
    </div>
  );
};

DefaultPropsComponent.defaultProps = {
  boolValue : PropTypes.bool,
  boolValueWithoutDefault : PropTypes.bool
};

DefaultPropsComponent.defaultProps = {
  boolValue : false
};

export default DefaultPropsComponent;