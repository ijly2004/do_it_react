import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '../Components/Test/03/Input';

storiesOf('Input', module)
  .add('기본 설정', () => <Input />)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('onChange', () => <Input name="name" onChange={action("onChange event 발생")} />)


