import { ComponentProps } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { AuthorPageView } from './AuthorPageView';

export default {
  title: 'Views/AuthorPageView',
  component: AuthorPageView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      options: ['EN', 'PL'],
      control: { type: 'radio' },
    },
    authorName: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof AuthorPageView>> = (args) => <AuthorPageView {...args} />;

export const Default = Template.bind({});
Default.args = {};
