import styled from "styled-components";

export const Element = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto;
    
    @media (max-width:620px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: hsl(180, 100%, 25%);
    font-weight: 400;
    background-color: #fff;
    border: none;
    transition: 0.5s;

    &:hover {
        color: hsl(180, 100%, 45%);
    }

    &:active {
        color: hsl(180, 100%, 15%);
    }

    &:disabled {
        color: #ccc;
        cursor: unset;
    }
`;

