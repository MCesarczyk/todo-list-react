import { TaskList, ListItem, TaskContent, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TaskList>
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
  </TaskList>
);

export default Tasks;