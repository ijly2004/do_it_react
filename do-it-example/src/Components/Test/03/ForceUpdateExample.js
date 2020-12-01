import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StateExample extends Component {
  constructor(props) {
    super(props);

    this.loading = true;
    this.formData = 'no data';

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 2000);
  }

  handleData() {
    this.loading = false;
    this.formData = 'new data';
    this.forceUpdate();
  
    console.log('handleData', this.state);
  }


  render() {
    return (
      <div>
          loading : {String(this.loading)}<br/>
          result : {this.formData}<br/>
          {!this.loading && "handle data excuted" }
      </div>
    );
  }
}

StateExample.propTypes = {

};

export default StateExample;
