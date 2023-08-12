import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';

import { RootState } from 'store';
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from 'features/tasks/tasksSlice';
import { SEARCH_QUERY_PARAM_NAME } from './constants';
import { ListItem } from 'ui/molecules/ListItem';

export const TasksList = () => {
  const location = useLocation();
  const query: string | null = new URLSearchParams(location.search).get(SEARCH_QUERY_PARAM_NAME);

  const tasks = useSelector((state: RootState) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <StyledTaskList>
      {tasks.map(({ id, done, content }) => (
        <ListItem
          key={id}
          hidden={done && hideDone}
          done={done}
          onToggleDone={() => dispatch(toggleTaskDone(id))}
          onDelete={() => dispatch(removeTask(id))}
        >
          <StyledLink to={`/tasks/${id}`}>{content}</StyledLink>
        </ListItem>
      ))}
    </StyledTaskList>
  );
};

export const StyledTaskList = styled.ul`
  background-color: ${({ theme }) => theme.color.background};
  padding: 15px;
  list-style-type: none;
  width: 100%;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primaryText}; 

  &:active {
    filter: brightness(150%);
  }
`;
