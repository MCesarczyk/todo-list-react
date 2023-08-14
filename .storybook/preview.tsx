import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from '../src/GlobalProvider';
import { theme } from '../src/theme';
import { store } from '../src/store';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <GlobalProvider store={store} theme={theme}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </GlobalProvider>
    ),
  ],
};

export default preview;
