import React from 'react';
import PropsComponent from './02/PropsComponent';
import DefaultPropsComponent from './02/DefaultPropsComponent';
import ChildProperty from './02/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import Counter from './03/Counter';
import  LifecycleExampleApp from './03/LifecycleExampleApp.js';
 import  DestroyApp from './03/DestroyApp.js';


const Test = () => {
  return (
    <>
      {/* <PropsComponent boolValue={true} numValue={1} arrayValue={[1,2]} />  */}
      {/* <DefaultPropsComponent /> */}
      {/* <ChildProperty><div><span>자식노드</span></div></ChildProperty> */}
      {/* <StateExample /> */}
      {/* <ForceUpdateExample /> */}
      {/* <Counter /> */}
      {/* <LifecycleExampleApp /> */}
      <DestroyApp />
    </>
  );
};

export default Test;
