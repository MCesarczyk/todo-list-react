import { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { TaskPageView } from './TaskPageView';

export default {
  title: 'Views/TaskPageView',
  component: TaskPageView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      options: ['EN', 'PL'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof TaskPageView>> = (args) => <TaskPageView {...args} />;

export const Default = Template.bind({});
Default.args = {};
