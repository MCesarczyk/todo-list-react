import { useState } from 'react';
import { useTasks } from '../../App/useTasks';
import { useLocalStorageState } from '../../App/useLocalStorageState';
import Form from "./Form";
import Switcher from "../languages/Switcher";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from '../../common/Header';
import languages from "../languages/languages";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const [language, setLanguage] = useLocalStorageState("language", "EN");

  document.title = languages[language].headerTitle;

  const {
    tasks,
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
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
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