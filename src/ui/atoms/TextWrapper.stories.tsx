import { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { TextWrapper } from './TextWrapper';

export default {
  title: 'Atoms/TextWrapper',
  component: TextWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {},
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof TextWrapper>> = (args) => <TextWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  $variant: 'PRIMARY',
  children: 'primary',
};

export const Strikethrough = Template.bind({});
Strikethrough.args = {
  $variant: 'STRIKETHROUGH',
  children: 'strikethrough',
};
