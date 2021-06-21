import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    background-color: #fff;
    padding: 15px;
    list-style-type: none;
    width: 100%;
    margin: 0 auto;
`;

export const ListItem = styled.li`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 6px;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const TaskContent = styled.span`
    word-break: break-all;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;