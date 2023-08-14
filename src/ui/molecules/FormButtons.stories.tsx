import { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { FormButtons } from './FormButtons';

export default {
  title: 'Molecules/FormButtons',
  component: FormButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

const Template: StoryFn<ComponentProps<typeof FormButtons>> = (args) => <FormButtons {...args} />;

export const Default = Template.bind({});
Default.args = {};
