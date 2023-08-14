import { Meta, StoryFn } from "@storybook/react";
import { Table } from "../components/Table/index";
import { DesktopTable } from "../components/Table/DesktopTable";
import { MobileTable } from "../components/Table/MobileTable";
import { MockCustomerContextProvider } from "../../.jest/mocks/mockCustomerContext";

export default {
  title: "Components/Table",
  component: Table,
  decorators: [
    (Story) => (
      <MockCustomerContextProvider>{Story()}</MockCustomerContextProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <Table />;
const DesktopTemplate: StoryFn = () => <DesktopTable />;
const MobileTemplate: StoryFn = () => <MobileTable />;

export const Default = Template.bind({});
export const Desktop = DesktopTemplate.bind({});

Desktop.parameters = {
  layout: "centered",
};
export const Mobile = MobileTemplate.bind({});

Mobile.parameters = {
  layout: "centered",
};
