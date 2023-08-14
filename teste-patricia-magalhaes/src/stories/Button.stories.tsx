import type { Meta, StoryFn } from "@storybook/react";

import { Button, ButtonProps } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
  title: "Label do botão",
  $variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "md",
  title: "Label do botão",
  $variant: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: "md",
  title: "Label do botão",
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  title: "Label do botão",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  title: "Label do botão",
};
