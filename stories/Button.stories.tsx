import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "Test",
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  //
};
