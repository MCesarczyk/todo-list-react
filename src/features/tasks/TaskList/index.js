import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";
import { StyledTaskList, ListItem, TaskContent, Button } from "./styled";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
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
            {task.content}
          </TaskContent>
          <Button
            remove
            onClick={() => removeTask(task.id)}
          >
            🗑
          </Button>
        </ListItem>
      ))}
    </StyledTaskList>
  )
};

export default TaskList;