import descriptions from '../../languages/descriptions';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from '../../languages/languageSlice';
import { Button } from './styled';
import { fetchExampleTasks, selectState } from '../tasksSlice';
import { Header } from 'common/Header';
import { Section } from 'common/Section/Section';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { TaskList } from './TaskList/TaskList';
import { Buttons } from './Buttons/Buttons';

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
        body={<TaskList />}
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
