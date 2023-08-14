import { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { TasksPageView } from './TasksPageView';

export default {
  title: 'Views/TasksPageView',
  component: TasksPageView,
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

const Template: StoryFn<ComponentProps<typeof TasksPageView>> = (args) => <TasksPageView {...args} />;

export const Default = Template.bind({});
Default.args = {};
