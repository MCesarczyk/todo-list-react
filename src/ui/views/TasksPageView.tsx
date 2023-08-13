import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchExampleTasks,
  selectHideDone,
  selectIfAllDone,
  selectState,
  selectTasks,
  setAllDone,
  toggleHideDone,
} from 'app/tasks/tasksSlice';
import { descriptions } from 'common/languages/descriptions';
import { selectLanguage } from 'common/languages/languageSlice';
import { Button } from 'ui/atoms/Button';
import { FormButtons } from 'ui/molecules/FormButtons';
import { Section } from 'ui/organisms/Section';
import { Layout } from 'ui/templates/Layout';

interface TasksPageViewProps {
  form: ReactNode;
  search: ReactNode;
  tasksList: ReactNode;
}

export const TasksPageView = ({ form, search, tasksList }: TasksPageViewProps) => {
  const dispatch = useDispatch();

  const language = useSelector(selectLanguage);
  const state = useSelector(selectState);

  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const allDone = useSelector(selectIfAllDone);

  const buttons = [
    {
      id: 1,
      variant: 'TEXT',
      onClick: () => dispatch(toggleHideDone()),
      children: hideDone
        ? descriptions[language].toggleButtonInnerTextHidden
        : descriptions[language].toggleButtonInnerTextVisible,
    },
    {
      id: 2,
      variant: 'TEXT',
      onClick: () => dispatch(setAllDone()),
      disabled: allDone,
      children: descriptions[language].setDoneButtonInnerText,
    },
  ];

  return (
    <Layout title={descriptions[language].headerTitle}>
      <Section
        title={descriptions[language].sectionTitle}
        body={form}
        extraHeaderContent={
          <>
            <div>
              <Button disabled={state === 'loading'} onClick={() => dispatch(fetchExampleTasks())}>
                {state === 'loading'
                  ? descriptions[language].getExampleTasksButtonLoader
                  : descriptions[language].getExampleTasksButtonText}
              </Button>
            </div>
          </>
        }
      />
      <Section title={descriptions[language].searchSectionTitle} body={search} extraHeaderContent={<></>} />
      <Section
        title={descriptions[language].tasksSectionTitle}
        body={tasksList}
        extraHeaderContent={tasks && <FormButtons buttons={buttons} />}
      />
    </Layout>
  );
};

TasksPageView.defaultProps = {
  form: 'Form module',
  search: 'Search module',
  tasksList: 'TasksList module',
};

TasksPageView.displayName = 'TasksPage';
