import { useSelector } from 'react-redux';
import { useTasks } from '../../App/useTasks';
import { useLocalStorageState } from '../../App/useLocalStorageState';
import Form from "./Form";
import Switcher from "../languages/Switcher";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from '../../common/Header';
import languages from "../languages/languages";
import { selectTasks } from './tasksSlice';

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const [language, setLanguage] = useLocalStorageState("language", "EN");

  document.title = languages[language].headerTitle;

  const {
    toggleTaskDone,
    removeTask,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <main>
      <Header title={languages[language].headerTitle} />
      <Section
        title={languages[language].sectionTitle}
        body={
          <Form
            addNewTask={addNewTask}
            inputPlaceholder={languages[language].inputPlaceholder}
            formButtonInnerText={languages[language].formButtonInnerText}
          />
        }
        extraHeaderContent={
          <Switcher
            languages={languages}
            language={language}
            setLanguage={setLanguage}
          />
        }
      />
      <Section
        title={languages[language].tasksSectionTitle}
        body={
          <TaskList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
            setDoneButtonInnerText={languages[language].setDoneButtonInnerText}
            toggleButtonInnerTextVisible={languages[language].toggleButtonInnerTextVisible}
            toggleButtonInnerTextHidden={languages[language].toggleButtonInnerTextHidden}
          />
        }
      />
    </main>
  );
}

export default Tasks;