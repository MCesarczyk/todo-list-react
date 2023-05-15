import NavigationLink from './NavigationLink';
import { StyledNavList } from './styled';

interface NavProps {
  tasksPath: string;
  tasksLabel: string;
  authorPath: string;
  authorLabel: string;
}

const Nav = ({ tasksPath, tasksLabel, authorPath, authorLabel }: NavProps) => (
  <nav>
    <StyledNavList>
      <li>
        <NavigationLink path={tasksPath} label={tasksLabel} />
      </li>
      <li>
        <NavigationLink path={authorPath} label={authorLabel} />
      </li>
    </StyledNavList>
  </nav>
);

export default Nav;
