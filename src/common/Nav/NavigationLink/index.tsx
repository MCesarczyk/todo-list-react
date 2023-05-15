import { StyledNavLink } from './styled';

interface NavigationLinkProps {
  path: string;
  label: string;
}

const NavigationLink = ({ path, label }: NavigationLinkProps) => (
  <StyledNavLink to={path}>{label}</StyledNavLink>
);

export default NavigationLink;
