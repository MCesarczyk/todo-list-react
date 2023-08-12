import { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { ListItem } from './ListItem';

export default {
  title: 'Molecules/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hidden: { control: 'boolean' },
    done: { control: 'boolean' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof ListItem>> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  hidden: false,
  done: false,
  children: 'default content',
};
