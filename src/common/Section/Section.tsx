import { ReactNode } from 'react';
import { HeaderContainer } from '../HeaderContainer';
import { SectionContainer, Header } from './styled';

interface SectionProps {
  title: string;
  body: ReactNode;
  extraHeaderContent?: JSX.Element;
}

export const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
  <SectionContainer>
    <HeaderContainer>
      <Header>{title}</Header>
      {extraHeaderContent}
    </HeaderContainer>
    {body}
  </SectionContainer>
);
