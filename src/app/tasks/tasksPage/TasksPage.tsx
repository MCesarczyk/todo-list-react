import { TasksPageView } from 'ui/views/TasksPageView';
import { Form } from './Form';
import { Search } from './Search';
import { TasksList } from './TasksList';
import { useSelector } from 'react-redux';
import { selectLanguage } from '~/common/languages/languageSlice';

export const TasksPage = () => {
  const language: string = useSelector(selectLanguage);

  return <TasksPageView language={language} form={<Form />} search={<Search />} tasksList={<TasksList />} />;
};
