import { useSelector } from 'react-redux';

import { selectLanguage } from 'common/languages/languageSlice';
import { descriptions } from 'common/languages/descriptions';
import { AuthorPageView } from 'ui/views/AuthorPageView';

export const AuthorPage = () => {
  const language: string = useSelector(selectLanguage);

  return (
    <AuthorPageView
      language={language}
      authorName="Michał Cesarczyk"
      description={descriptions[language].authorPageContent}
    />
  );
};
