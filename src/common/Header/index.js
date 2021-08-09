import descriptions from "../../features/languages/descriptions";
import Switcher from "../../features/languages/Switcher";
import { HeaderContainer } from "../HeaderContainer";

const Header = ({ title }) => (
  <header>
    <HeaderContainer>
      <h1>{title}</h1>
      <Switcher descriptions={descriptions} />
    </HeaderContainer>
  </header>
);

export default Header;