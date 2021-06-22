import styled from "styled-components";

export const SectionContainer = styled.section`
    margin-bottom: 10px;
`;

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    align-items: center;
    background-color: #fff;
    padding-right: 10px;
    margin: 0 0 1px 0;

    @media (max-width:620px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

export const Header = styled.h2`
    background-color: #fff;
    padding: 15px;
    font-weight: 700;
    font-size: 20px;
    margin: 0 0 1px 0;
`;