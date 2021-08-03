import Form from "./Form";
import Switcher from "../languages/Switcher";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from '../../common/Header';
import descriptions from "../languages/descriptions";
import { useDispatch, useSelector } from "react-redux";
import languageSlice, { selectLanguage } from "../languages/languageSlice";
import { Button } from "./styled";
import { fetchExampleTasks } from "./tasksSlice";

function Tasks() {
  const language = useSelector(selectLanguage);

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
              <Button onClick={() => dispatch(fetchExampleTasks())}>
                {descriptions[language].getExampleTasksButtonText}
              </Button>
            </div>
            <Switcher descriptions={descriptions} />
          </>
        }
      />
      <Section
        title={descriptions[language].tasksSectionTitle}
        body={
          <TaskList />
        }
        extraHeaderContent={
          <Buttons
            setDoneButtonInnerText={descriptions[language].setDoneButtonInnerText}
            toggleButtonInnerTextVisible={descriptions[language].toggleButtonInnerTextVisible}
            toggleButtonInnerTextHidden={descriptions[language].toggleButtonInnerTextHidden}
          />
        }
      />
    </main>
  );
}

export default Tasks;