import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Input, { InputProps } from '../components/Input';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'onChange' },
    inputValue: { control: false },
    setInputValue: { control: false }
  },
  parameters: {
    layout: 'centered'
  }
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
  const [inputValue, setInputValue] = useState(
    args.queryStatus === 'default' ? '' : `Campo ${args.queryStatus}`
  );

  return (
    <Input inputValue={inputValue} setInputValue={setInputValue} {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  queryStatus: 'default',
  label: 'Label do campo',
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  queryStatus: 'default',
  label: 'campo desabilitado',
  disabled: true
};

export const Info = Template.bind({});
Info.args = {
  queryStatus: 'info',
  label: 'input info',
  disabled: false
};

export const Success = Template.bind({});
Success.args = {
  queryStatus: 'success',
  label: 'input success',
  disabled: false
};

export const Attention = Template.bind({});
Attention.args = {
  queryStatus: 'attention',
  label: 'input attention',
  disabled: false
};

export const Error = Template.bind({});
Error.args = {
  queryStatus: 'error',
  label: 'input error',
  disabled: false
};
