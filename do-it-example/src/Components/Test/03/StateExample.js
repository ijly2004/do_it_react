import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading : true,
      formData : 'no data'
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 2000);

  }

  handleData() {
    const data = 'new data';
    const {formData}  = this.state;

    /* setState passing Object
    this.setState({
      loading : false,
      formData : data
    });
    */
  
    this.setState(prevState => ({
        loading : false,
        formData : data
      }));

    console.log('handleData', this.state);
  }


  render() {
    return (
      <div>
          loading : {String(this.state.loading)}<br/>
          result : {this.state.formData}<br/>
          {!this.state.loading && "handle data excuted"}
      </div>
    );
  }
}

StateExample.propTypes = {

};

export default StateExample;
