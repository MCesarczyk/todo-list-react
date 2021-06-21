import "./style.css";
import { TaskList } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TaskList>
    {tasks.map(task => (
      <li
        className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}
        key={task.id}>
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
      </li>
    ))}
  </TaskList>
);

export default Tasks;