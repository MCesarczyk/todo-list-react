import { useSelector, useDispatch } from "react-redux";
import { StyledTaskList, ListItem, TaskContent, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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