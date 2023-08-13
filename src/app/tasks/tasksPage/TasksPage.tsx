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
import { Layout } from 'ui/templates/Layout';
import { Section } from 'ui/organisms/Section';
import { FormButtons } from 'ui/molecules/FormButtons';
import { Button } from 'ui/atoms/Button';
import { Form } from './Form';
import { Search } from './Search';
import { TasksList } from './TasksList';

export const TasksPage = () => {
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
        body={
          <Form
            inputPlaceholder={descriptions[language].inputPlaceholder}
            formButtonInnerText={descriptions[language].formButtonInnerText}
          />
        }
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
      <Section title={descriptions[language].searchSectionTitle} body={<Search />} extraHeaderContent={<></>} />
      <Section
        title={descriptions[language].tasksSectionTitle}
        body={<TasksList />}
        extraHeaderContent={tasks && <FormButtons buttons={buttons} />}
      />
    </Layout>
  );
};
