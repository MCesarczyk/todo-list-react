import { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Section } from './Section';

export default {
  title: 'Organisms/Section',
  component: Section,
  argTypes: {},
} as Meta;

const Template: StoryFn<ComponentProps<typeof Section>> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {};
