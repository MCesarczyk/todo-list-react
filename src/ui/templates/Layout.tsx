import { ReactNode } from 'react';
import { styled } from 'styled-components';

import { Switcher } from 'ui/molecules/Switcher';
import { useSwitcherButtons } from 'common/languages/useSwitcherButtons';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  const { buttons } = useSwitcherButtons();

  return (
    <>
      <Header>
        <h1>{title}</h1>
        <Switcher buttons={buttons} />
      </Header>
      <main>{children}</main>
    </>
  );
};

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 10px;
  align-items: center;
  padding-right: 10px;
  margin: 0 0 1px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

Layout.defaultProps = {
  title: 'Title',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

Layout.displayName = 'Layout';
