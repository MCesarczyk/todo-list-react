import { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Thumb } from './Thumb';

export default {
  title: 'Atoms/Thumb',
  component: Thumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'click' },
    disabled: { control: 'boolean' },
    variant: {
      table: {
        disable: true,
      },
    },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof Thumb>> = (args) => <Thumb {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'PRIMARY',
  children: '01',
};

export const Done = Template.bind({});
Done.args = {
  variant: 'DONE',
  children: '✔',
};

export const Undone = Template.bind({});
Undone.args = {
  variant: 'UNDONE',
  children: '',
};

export const Remove = Template.bind({});
Remove.args = {
  variant: 'REMOVE',
  children: '🗑',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'TEXT',
  children: 'TXT',
};
