import { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Switcher } from './Switcher';

export default {
  title: 'Molecules/Switcher',
  component: Switcher,
  argTypes: {},
} as Meta;

const Template: StoryFn<ComponentProps<typeof Switcher>> = (args) => <Switcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
