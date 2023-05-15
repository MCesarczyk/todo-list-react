import { Switcher } from 'features/languages/Switcher';
import { descriptions } from 'features/languages/descriptions';
import { HeaderContainer } from 'common/header/HeaderContainer';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <HeaderContainer>
      <h1>{title}</h1>
      <Switcher descriptions={descriptions} />
    </HeaderContainer>
  </header>
);
