import descriptions from '../../features/languages/descriptions';
import Switcher from '../../features/languages/Switcher';
import { HeaderContainer } from '../HeaderContainer';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <header>
    <HeaderContainer>
      <h1>{title}</h1>
      <Switcher descriptions={descriptions} />
    </HeaderContainer>
  </header>
);

export default Header;
