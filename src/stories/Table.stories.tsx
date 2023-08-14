import { Meta, StoryFn } from '@storybook/react';

import Table, { TableProps } from '../components/Table/Table';

import mockData from '../components/Table/mockData.json';

export default {
  title: 'Component/Table',
  component: Table,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    queryType: { control: false },
    columns: { control: false },
    customers: { control: false },
    setResult: { control: false }
  }
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  query: '',
  columns: ['id', 'name', 'email', 'phone', 'status'],
  customers: mockData.customers
};

export const Empty = Template.bind({});
Empty.args = {
  query: '',
  columns: ['id', 'name', 'email', 'phone', 'status']
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  query: '',
  caption: 'lista de clientes',
  columns: ['id', 'name', 'email', 'phone', 'status'],
  customers: mockData.customers
};

export const WithCustomError = Template.bind({});
WithCustomError.args = {
  query: '',
  columns: ['name', 'occupation', 'address'],
  errorMessage: 'Custom error message'
};
