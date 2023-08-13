import { Task } from 'types';
import { descriptions } from 'common/languages/descriptions';
import { Layout } from 'ui/templates/Layout';
import { Section } from 'ui/organisms/Section';

interface TaskPageViewProps {
  language: string;
  task: Task | undefined;
}

export const TaskPageView = ({ language, task }: TaskPageViewProps) => (
  <Layout title={descriptions[language].taskPageTitle}>
    <Section
      title={!task ? descriptions[language].taskStatusNotFound : task.content}
      body={
        <>
          <strong>{task && descriptions[language].taskStatusLabel}</strong>
          {task ? (task.done ? descriptions[language].taskStatusDone : descriptions[language].taskStatusUndone) : ''}
        </>
      }
      extraHeaderContent={<></>}
    />
  </Layout>
);

TaskPageView.defaultProps = {
  language: 'EN',
  task: {
    id: 'trewrytreyrytr56y4th54trg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    done: false,
  },
};

TaskPageView.displayName = 'TaskPageView';
