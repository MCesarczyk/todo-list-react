import { useSelector, useDispatch } from "react-redux";
import { StyledTaskList, ListItem, TaskContent, Button } from "./styled";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("searchQueryParamName");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <StyledTaskList>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : " "}
          </Button>
          <TaskContent done={task.done}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
          </TaskContent>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </ListItem>
      ))}
    </StyledTaskList>
  )
};

export default TaskList;