import { TasksPageView } from 'ui/views/TasksPageView';
import { Form } from './Form';
import { Search } from './Search';
import { TasksList } from './TasksList';

export const TasksPage = () => <TasksPageView form={<Form />} search={<Search />} tasksList={<TasksList />} />;
