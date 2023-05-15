import { useSelector } from 'react-redux';
import { selectLanguage } from 'features/languages/languageSlice';
import { descriptions } from 'features/languages/descriptions';
import { Header } from 'common/header/Header';
import { Section } from 'common/Section';

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
