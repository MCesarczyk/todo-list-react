import { useState } from 'react';
import { useTasks } from './useTasks';
import { useLanguage } from './useLanguage';
import Form from "./Form";
import Switcher from "./Switcher";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import Container from "./Container";
import languages from "./languages";

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { langId, setLangId } = useLanguage();

  const changeLanguage = (key) => {
    setLangId(languages.findIndex(language => language.key === key));
  };

  const {
    tasks,
    toggleTaskDone,
    removeTask,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title={languages[langId].headerTitle} />
      <Section
        title={languages[langId].sectionTitle}
        body={
          <Form
            addNewTask={addNewTask}
            inputPlaceholder={languages[langId].inputPlaceholder}
            formButtonInnerText={languages[langId].formButtonInnerText}
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
        title={languages[langId].tasksSectionTitle}
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
            setDoneButtonInnerText={languages[langId].setDoneButtonInnerText}
            toggleButtonInnerTextVisible={languages[langId].toggleButtonInnerTextVisible}
            toggleButtonInnerTextHidden={languages[langId].toggleButtonInnerTextHidden}
          />
        }
      />
    </Container>
  );
}

export default App;