import React from 'react';
import PropTypes from 'prop-types';

const SFC = (props, context) => {
  const { somePropValue } = props;
  const { someContextValue } = context;

  return (
    <h3>{somePropValue}</h3>
  );
};

SFC.propTypes = {somePropValue : PropTypes.any};
SFC.defaultProps = {somePropValue : 'default value'};

export default SFC;
