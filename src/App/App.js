import { useState } from 'react';
import { useTasks } from './useTasks';
import { useLocalStorageState } from './useLocalStorageState';
import Form from "./Form";
import Switcher from "./Switcher";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import languages from "./languages";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const [language, setLanguage] = useLocalStorageState("language", 0);

  const changeLanguage = (key) => {
    setLanguage(languages.findIndex(language => language.key === key));
  };

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
            changeLanguage={changeLanguage}
          />
        }
      />
      <Section
        title={languages[language].tasksSectionTitle}
        body={
          <Tasks
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

export default App;