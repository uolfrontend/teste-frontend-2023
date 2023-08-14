import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Select, { SelectProps } from '../components/Select';

export default {
  title: 'Component/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    handleClick: { action: 'handleClick' },
    setQueryType: { control: false },
    queryType: { control: false }
  }
} as Meta;

const Template: StoryFn<SelectProps> = (args) => {
  const [query, setQuery] = useState(args.queryType);

  return <Select {...args} queryType={query} setQueryType={setQuery} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'label de select',
  disabled: false,
  options: ['id', 'name', 'email', 'phone', 'status'],
  setQueryType: (value: string) => console.log('User search query:', value),
  queryType: 'email'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'select desabilitado',
  disabled: true,
  options: ['id', 'name', 'email', 'phone', 'status'],
  setQueryType: (value: string) => console.log('User search query:', value),
  queryType: 'email'
};
