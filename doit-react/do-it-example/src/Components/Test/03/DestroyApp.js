import React from 'react';
import LifecycleExample from './LifecycleExample';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasDestroyed : false
    };
  }

  componentDidMount() {
    console.log('App componentDidMount');
    this.setState({hasDestroyed : true});
  }

  render() {
    return (
      <div>{this.state.hasDestroyed ? null: <LifecycleExample />}</div>
    );
  }
}

export default App;
