import { descriptions } from 'features/languages/descriptions';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from 'features/languages/languageSlice';
import { fetchExampleTasks, selectState } from 'features/tasks/tasksSlice';
import { Header } from 'common/header/Header';
import { Section } from 'common/Section';
import { Form } from './Form';
import { Search } from './Search';
import { TasksList } from './TasksList';
import { Buttons } from './Buttons';
import { Button } from './Button';

export const TasksPage = () => {
  const language = useSelector(selectLanguage);
  const state = useSelector(selectState);

  const dispatch = useDispatch();

  document.title = descriptions[language].headerTitle;

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
              <Button
                disabled={state === 'loading'}
                onClick={() => dispatch(fetchExampleTasks())}
              >
                {state === 'loading'
                  ? descriptions[language].getExampleTasksButtonLoader
                  : descriptions[language].getExampleTasksButtonText}
              </Button>
            </div>
          </>
        }
      />
      <Section
        title={descriptions[language].searchSectionTitle}
        body={<Search />}
        extraHeaderContent={<></>}
      />
      <Section
        title={descriptions[language].tasksSectionTitle}
        body={<TasksList />}
        extraHeaderContent={
          <Buttons
            setDoneButtonInnerText={
              descriptions[language].setDoneButtonInnerText
            }
            toggleButtonInnerTextVisible={
              descriptions[language].toggleButtonInnerTextVisible
            }
            toggleButtonInnerTextHidden={
              descriptions[language].toggleButtonInnerTextHidden
            }
          />
        }
      />
    </main>
  );
};
