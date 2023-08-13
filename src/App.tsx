import { useEffect } from 'react';
import { Route, HashRouter, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TasksPage } from 'app/tasks/tasksPage/TasksPage';
import { TaskPage } from 'app/tasks/TaskPage';
import { AuthorPage } from 'app/author/AuthorPage';
import { selectLanguage } from 'common/languages/languageSlice';
import { descriptions } from 'common/languages/descriptions';
import { Nav } from 'common/Nav';
import { version } from '../package.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const title = 'React';

export const App = () => {
  const language = useSelector(selectLanguage);

  document.title = descriptions[language].headerTitle;

  useEffect(() => {
    console.log(`Version: ${version}`);
  }, []);

  return (
    <HashRouter>
      <Nav
        tasksPath={'/tasks'}
        tasksLabel={descriptions[language].tasksPageTitle}
        authorPath={'/author'}
        authorLabel={descriptions[language].authorPageTitle}
      />
      <Routes>
        <Route path="/tasks/:id" element={<TaskPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/" element={<Navigate to="/tasks" />} />
      </Routes>
    </HashRouter>
  );
};
