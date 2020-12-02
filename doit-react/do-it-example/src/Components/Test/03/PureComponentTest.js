import React, { Component, PureComponent } from 'react';

class MyComponent extends Component {
  componentDidUpdate() {
    console.log("MyComponent componentDidUpdate");
  }

  render() {
    return (<></>);
  }
}

class MyPureComponent extends PureComponent {
  componentDidUpdate() {
    console.log("MyPureComponent componentDidUpdate");
  }
  render() {
    return (<></>);
  }
}

class PureComponentTest extends Component {
  constructor(props) {
    super(props);
    this.someValue = {val1 : "val1"};
    this.listValue = [{name:'park'}, {name: 'lee'}];
    this.state = {version :0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = 'justin';
      this.setState({version:1})
    }, 100);

    setTimeout(()=>{
      this.listValue = [{name:'justin'}, {name:'lee'}];
      this.setState({version:2});
    }, 200);
  }

  deepCopyClick = ()=> {
    setTimeout(() => {
      console.log('deepCopyClick seTimeout1');
      this.listValue = this.someValue;
      this.setState({version:1})
    }, 100);

    setTimeout(()=>{
      console.log('deepCopyClick seTimeout2');
      this.someValue = {value : {changed : 0}};
      this.listValue = this.someValue;
      this.setState({version:2});
    }, 200);
  }

  render() {
    return (
      <div>
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <button onClick={this.handleClick}>BUTTON</button>
        <button onClick={this.deepCopyClick}>BUTTON</button>
      </div>
    );
  }

}

export default PureComponentTest;