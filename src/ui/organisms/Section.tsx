import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { defaultTitle, sampleBody, sampleExtraContent } from '~/ui/organisms/fixtures';

interface SectionProps {
  title: string;
  body: ReactNode;
  extraHeaderContent?: ReactNode;
}

export const Section = ({
  title = defaultTitle,
  body = sampleBody,
  extraHeaderContent = sampleExtraContent,
}: SectionProps) => (
  <SectionContainer>
    <HeaderWrapper>
      <Header>{title}</Header>
      {extraHeaderContent}
    </HeaderWrapper>
    {body}
  </SectionContainer>
);

const SectionContainer = styled.section`
  color: ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.background};
  margin-bottom: 10px;
  padding: 15px;
`;

const HeaderWrapper = styled.div`
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

const Header = styled.h2`
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
  margin: 0 0 1px 0;
`;
