import React from 'react';
import PropsComponent from './02/PropsComponent';
import DefaultPropsComponent from './02/DefaultPropsComponent';
import ChildProperty from './02/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import CounterTest from './03/CounterTest';
import  LifecycleExampleApp from './03/LifecycleExampleApp.js';
import  DestroyApp from './03/DestroyApp.js';
import PureComponentTest from './03/PureComponentTest';
import ListExample from './03/03-8_ListExample';
import CounterApp from './03/03-9_CounterApp';
import ScrollSpy from './03/03-9_ScrollSpy';


const Test = () => {
  return (
    <>
      {/* <PropsComponent boolValue={true} numValue={1} arrayValue={[1,2]} />  */}
      {/* <DefaultPropsComponent /> */}
      {/* <ChildProperty><div><span>자식노드</span></div></ChildProperty> */}
      {/* <StateExample /> */}
      {/* <ForceUpdateExample /> */}
      {/* <LifecycleExampleApp /> */}
      {/* <DestroyApp /> */}
      {/* <CounterTest/> */}
      {/* <PureComponentTest /> */}
      {/* <CounterApp /> */}
      <ScrollSpy />
    </>
  );
};

export default Test;
