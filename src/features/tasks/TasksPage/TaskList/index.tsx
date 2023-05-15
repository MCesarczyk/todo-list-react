import { useSelector, useDispatch } from 'react-redux';
import {
  StyledTaskList,
  ListItem,
  TaskContent,
  Button,
  StyledLink,
} from './styled';
import {
  selectTasksByQuery,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from '../../tasksSlice';
import { useLocation } from 'react-router-dom';
import searchQueryParamName from '../searchQueryParamName';
import { RootState } from 'store';

const TaskList = () => {
  const location = useLocation();
  const query: string | null = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state: RootState) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <ListItem key={task.id} hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? '✔' : ' '}
          </Button>
          <TaskContent $done={task.done}>
            <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
          </TaskContent>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </ListItem>
      ))}
    </StyledTaskList>
  );
};

export default TaskList;
