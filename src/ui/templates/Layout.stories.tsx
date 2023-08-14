import { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'Templates/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

const Template: StoryFn<ComponentProps<typeof Layout>> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {};
