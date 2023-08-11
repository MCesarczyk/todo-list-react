import { useDispatch, useSelector } from 'react-redux';
import { descriptions } from 'common/languages/descriptions';
import { selectLanguage } from 'common/languages/languageSlice';
import { Header } from 'common/Header';
import {
  fetchExampleTasks,
  selectHideDone,
  selectIfAllDone,
  selectState,
  selectTasks,
  setAllDone,
  toggleHideDone,
} from 'features/tasks/tasksSlice';
import { Form } from './Form';
import { Search } from './Search';
import { TasksList } from './TasksList';
import { Button } from 'ui/atoms/Button';
import { FormButtons } from 'ui/molecules/FormButtons';
import { Section } from 'ui/organisms/Section';

export const TasksPage = () => {
  const dispatch = useDispatch();

  const language = useSelector(selectLanguage);
  const state = useSelector(selectState);

  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const allDone = useSelector(selectIfAllDone);

  const buttons = [
    {
      variant: 'TEXT',
      onClick: () => dispatch(toggleHideDone()),
      children: hideDone
        ? descriptions[language].toggleButtonInnerTextHidden
        : descriptions[language].toggleButtonInnerTextVisible,
    },
    {
      variant: 'TEXT',
      onClick: () => dispatch(setAllDone()),
      disabled: allDone,
      children: descriptions[language].setDoneButtonInnerText,
    },
  ];

  return (
    <main>
      <Header title={descriptions[language].headerTitle} />
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
    </main>
  );
};
