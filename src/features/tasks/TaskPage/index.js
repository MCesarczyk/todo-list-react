import Section from "../../../common/Section";
import Header from '../../../common/Header';
import descriptions from "../../languages/descriptions";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTasksById } from "../tasksSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { selectLanguage } from "../../languages/languageSlice";
// import { Button } from "./styled";
// import { fetchExampleTasks } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTasksById(state, id));

  return (
    <main>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono :O"}
        body={<><strong>Ukończone: </strong> {task.done ? "Tak" : "Nie"} </>}
        extraHeaderContent={<>gotowe</>}
      />
    </main>
  );
}

export default TaskPage;