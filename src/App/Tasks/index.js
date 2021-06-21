import "./style.css";
import { TaskList, ListItem } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TaskList>
    {tasks.map(task => (
      <ListItem
        key={task.id}
        hidden={task.done && hideDone}
        >
        <button
          className="tasks__button tasks__button--done"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : " "}
        </button>
        <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </ListItem>
    ))}
  </TaskList>
);

export default Tasks;