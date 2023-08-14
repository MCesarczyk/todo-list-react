import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '~/GlobalStyle';

interface GlobalProviderProps {
  children: ReactNode;
  store: ToolkitStore<any, any>;
  theme: any;
}

export const GlobalProvider = ({ children, store, theme }: GlobalProviderProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </Provider>
);
