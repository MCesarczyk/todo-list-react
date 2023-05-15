import { StyledNavLink } from './styled';

interface NavigationLinkProps {
  path: string;
  label: string;
}

export const NavigationLink = ({ path, label }: NavigationLinkProps) => (
  <StyledNavLink to={path}>{label}</StyledNavLink>
);
