import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <main>
        <Header title="O autorze" />
        <Section
            title="Michał Cesarczyk"
            body={<>O mnie</>}
            extraHeaderContent={<></>}
        />
    </main>
);

export default AuthorPage;