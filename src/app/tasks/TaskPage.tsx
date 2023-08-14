import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { getTasksById } from 'app/tasks/tasksSlice';
import { selectLanguage } from 'common/languages/languageSlice';
import { TaskPageView } from 'ui/views/TaskPageView';

export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state: RootState) => getTasksById(state, id));
  const language = useSelector(selectLanguage);

  return <TaskPageView language={language} task={task} />;
};
