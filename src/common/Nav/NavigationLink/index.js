import { StyledNavLink } from "./styled";

const NavigationLink = ({ path, label }) => (
    <StyledNavLink to={path}>
        {label}
    </StyledNavLink>
);

export default NavigationLink;