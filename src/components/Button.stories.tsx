import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';


export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: "Submit"
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {

};

export const Large = Template.bind({});
Large.args = {
  size: 'large',

};

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',

};

Red.argTypes = {
  backgroundColor: {
    control: "inline-radio",
    options: ["red", "blue", "green"]
  }
}


