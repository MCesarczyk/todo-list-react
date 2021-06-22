import { SectionContainer, HeaderContainer, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionContainer>
        <HeaderContainer>
            <Header>
                {title}
            </Header>
            {extraHeaderContent}
        </HeaderContainer>
        {body}
    </SectionContainer>
);

export default Section;