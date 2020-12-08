import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Components/Test/04/Button.jsx';

storiesOf('Button', module)
  .addWithJSX('기본 설정', () => <Button name="name" >전송하기</Button>)
  .addWithJSX('label 예제', () => <Button name="name" label="이름" >전송하기</Button>)
  .addWithJSX('onChange 예제', () => <Button name="name" onChange={action('onChange 이벤트 발생')} >전송하기</Button>)
  .addWithJSX('value 예제', () => <Button name="name" label="이름" value="두잇">전송하기</Button>)
  .addWithJSX('errorMessage 예제', () => <Button name="name" label="이름" errorMessage="이름을 입력해주세요" >전송하기</Button>)
  .addWithJSX('autoFocus 예제', () => <Button name="name" label="이름" autoFocus >전송하기</Button>);
