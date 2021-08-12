import NavigationLink from "./NavigationLink";
import { StyledNavList } from "./styled";

const Nav = ({ tasksPath, tasksLabel, authorPath, authorLabel }) => (
    <nav>
        <StyledNavList>
            <li>
                <NavigationLink
                    path={tasksPath}
                    label={tasksLabel}
                />
            </li>
            <li>
                <NavigationLink
                    path={authorPath}
                    label={authorLabel}
                />
            </li>
        </StyledNavList>
    </nav>
);

export default Nav;