import { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    onClick: { action: 'onChange' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
      table: {
        disable: true
      }
    }
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof Input>> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
