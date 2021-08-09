import Section from "../../../common/Section";
import Header from '../../../common/Header';
import descriptions from "../../languages/descriptions";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTasksById } from "../tasksSlice";

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