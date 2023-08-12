import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

import { Switcher } from 'common/languages/Switcher';
import { descriptions } from 'common/languages/descriptions';
import { changeLanguage } from 'common/languages/languageSlice';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const dispatch = useDispatch();

  const languageKeys = Object.keys(descriptions);

  const buttons = [
    {
      key: 1,
      value: languageKeys[0],
      onClick: () => dispatch(changeLanguage(languageKeys[0])),
    },
    {
      key: 2,
      value: languageKeys[1],
      onClick: () => dispatch(changeLanguage(languageKeys[1])),
    },
  ];

  return (
    <header>
      <Wrapper>
        <h1>{title}</h1>
        <Switcher buttons={buttons} />
      </Wrapper>
    </header>
  );
};

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
