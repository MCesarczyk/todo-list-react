import { useSelector } from 'react-redux';
import { selectLanguage } from '../languages/languageSlice';
import descriptions from '../languages/descriptions';
import { Header } from 'common/Header';
import { Section } from 'common/Section/Section';

export const AuthorPage = () => {
  const language: string = useSelector(selectLanguage);

  return (
    <main>
      <Header title={descriptions[language].authorPageTitle} />
      <Section
        title="Michał Cesarczyk"
        body={descriptions[language].authorPageContent}
        extraHeaderContent={<></>}
      />
    </main>
  );
};
