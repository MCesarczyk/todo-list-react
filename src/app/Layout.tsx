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
      <Wrapper>
        <h1>{title}</h1>
        <Switcher buttons={buttons} />
      </Wrapper>
      <main>{children}</main>
    </>
  );
};

const Wrapper = styled.header`
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
