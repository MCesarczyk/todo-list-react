import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(props => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.color.fontLight};

    &:${activeClassName} {
        color: red;
    }
`;

export const StyledNavBeam = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 15px;
    background-color: ${({ theme }) => theme.color.primary};
    margin-bottom: 20px;
`;