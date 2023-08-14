import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavProps {
  tasksPath: string;
  tasksLabel: string;
  authorPath: string;
  authorLabel: string;
}

export const Nav = ({ tasksPath, tasksLabel, authorPath, authorLabel }: NavProps) => (
  <nav>
    <StyledNavList>
      <li>
        <StyledNavLink to={tasksPath}>{tasksLabel}</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={authorPath}>{authorLabel}</StyledNavLink>
      </li>
    </StyledNavList>
  </nav>
);

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.primary};
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.fontLight};
  font-weight: 300;

  &.active {
    font-weight: 700;
  }
`;
