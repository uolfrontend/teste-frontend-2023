import type { Meta, StoryFn } from "@storybook/react";

import { InputField, InputProps } from "../components/InputField";

export default {
  title: "Components/Input",
  component: InputField,
  argTypes: {
    onChange: { action: "onChange" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Normal = Template.bind({});
Normal.args = {
  value: "Input do usuário",
  $variant: "normal",
};

export const Success = Template.bind({});
Success.args = {
  value: "Input do usuário",
  $variant: "success",
};

export const Error = Template.bind({});
Error.args = {
  value: "Input do usuário",
  $variant: "error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  $variant: undefined,
};