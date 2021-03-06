import Section from "../../../common/Section";
import Header from '../../../common/Header';
import descriptions from "../../languages/descriptions";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTasksById } from "../tasksSlice";
import { selectLanguage } from "../../languages/languageSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTasksById(state, id));
  const language = useSelector(selectLanguage);

  return (
    <main>
      <Header title={descriptions[language].taskPageTitle} />
      <Section
        title={!task ? descriptions[language].taskStatusNotFound : task.content}
        body={<>
          <strong>
            {task && descriptions[language].taskStatusLabel}
          </strong>
          {task ?
            (task.done ?
              descriptions[language].taskStatusDone
              : descriptions[language].taskStatusUndone)
            : ""}
        </>}
        extraHeaderContent={<></>}
      />
    </main>
  );
}

export default TaskPage;