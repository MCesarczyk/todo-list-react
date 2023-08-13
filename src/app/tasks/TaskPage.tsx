import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Layout } from 'app/Layout';
import { getTasksById } from 'app/tasks/tasksSlice';
import { descriptions } from 'common/languages/descriptions';
import { selectLanguage } from 'common/languages/languageSlice';
import { Section } from 'ui/organisms/Section';

export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state: RootState) => getTasksById(state, id));
  const language = useSelector(selectLanguage);

  return (
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
};