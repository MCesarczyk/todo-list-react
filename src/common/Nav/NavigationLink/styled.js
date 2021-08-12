import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.fontLight};
    font-weight: 300;

     &.active {
        font-weight: 700;
    }
`;