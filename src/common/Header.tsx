import { styled } from 'styled-components';

import { Switcher } from 'common/languages/Switcher';
import { descriptions } from 'common/languages/descriptions';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <Wrapper>
      <h1>{title}</h1>
      <Switcher descriptions={descriptions} />
    </Wrapper>
  </header>
);

const Wrapper = styled.div`
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

