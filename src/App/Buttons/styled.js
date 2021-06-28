import styled from "styled-components";

export const Element = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.primary};
    font-weight: 400;
    background-color: transparent;
    border: none;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: #ccc;
        cursor: unset;
    }
`;

