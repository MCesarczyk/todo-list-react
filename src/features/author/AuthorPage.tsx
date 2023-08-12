import { useSelector } from 'react-redux';

import { selectLanguage } from 'common/languages/languageSlice';
import { descriptions } from 'common/languages/descriptions';
import { Layout } from 'features/Layout';
import { Section } from 'ui/organisms/Section';

export const AuthorPage = () => {
  const language: string = useSelector(selectLanguage);

  return (
    <Layout title={descriptions[language].authorPageTitle}>
      <Section title="Michał Cesarczyk" body={descriptions[language].authorPageContent} extraHeaderContent={<></>} />
    </Layout>
  );
};
