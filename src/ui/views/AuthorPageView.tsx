import { descriptions } from 'common/languages/descriptions';
import { Layout } from 'ui/templates/Layout';
import { Section } from 'ui/organisms/Section';

interface AuthorPageViewProps {
  language: string;
  authorName: string;
  description: string;
}

export const AuthorPageView = ({ language, authorName, description }: AuthorPageViewProps) => (
  <Layout title={descriptions[language].authorPageTitle}>
    <Section title={authorName} body={description} extraHeaderContent={<></>} />
  </Layout>
);

AuthorPageView.defaultProps = {
  language: 'EN',
  authorName: 'Paulo Coehlo',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
};

AuthorPageView.displayName = 'AuthorPageView';
