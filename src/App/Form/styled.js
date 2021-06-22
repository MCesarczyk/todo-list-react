import styled from "styled-components";

export const FormComponent = styled.form`
    background-color: #fff;
    padding: 10px;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FormInput = styled.input`
    border: solid 1px #ddd;
    padding: 10px;
    flex-grow: 1;
    margin: 10px;
`;

export const Button = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    color: #fff;
    background-color: teal;
    border: none;
    padding: 5px;
    padding: 10px;
    margin: 10px;
    transition: background 0.5s, transform 1s;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.05);
    }

    &:active {
        background-color: hsl(180, 80%, 45%);
        box-shadow: inset 1px 1px 2px darkgrey;
    }
`;