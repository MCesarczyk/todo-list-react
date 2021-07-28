import { useLocalStorageState } from '../../useLocalStorageState';
import Form from "./Form";
import Switcher from "../languages/Switcher";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from '../../common/Header';
import languages from "../languages/languages";

function Tasks() {
  const [language, setLanguage] = useLocalStorageState("language", "EN");

  document.title = languages[language].headerTitle;

  return (
    <main>
      <Header title={languages[language].headerTitle} />
      <Section
        title={languages[language].sectionTitle}
        body={
          <Form
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
          <TaskList />
        }
        extraHeaderContent={
          <Buttons
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