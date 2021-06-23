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

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    color: #fff;
    border: none;
    padding: 5px;
    width: 28px;
    height: 28px;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(137, 85%, 21%);

        &:hover {
            background-color: hsl(135, 85%, 31%);
        }

        &:active {
            background-color: hsl(135, 85%, 41%);
            box-shadow: inset 1px 1px 3px darkgrey;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: crimson;

        &:hover {
            background-color: hsl(348, 83%, 60%);
        }

        &:active {
            background-color: hsl(348, 83%, 70%);
            box-shadow: inset 1px 1px 3px darkgrey;
        }
    `}
`;