import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { StyledTaskList, ListItem, TaskContent, Button } from "./styled";

const TaskList = ({ removeTask, toggleTaskDone }) => {
  const {tasks, hideDone} = useSelector(selectTasks);
  return (
    <StyledTaskList>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => toggleTaskDone(task.id)}
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