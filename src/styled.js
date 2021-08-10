import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.color.fontLight};
    font-weight: 300;

     &.${activeClassName} {
        font-weight: 700;
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