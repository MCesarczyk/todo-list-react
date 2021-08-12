import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "./features/languages/languageSlice";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import descriptions from "./features/languages/descriptions";
import Nav from "./common/Nav";

const App = () => {
    const language = useSelector(selectLanguage);

    return (
        <HashRouter>
            <Nav
                tasksPath={"/tasks"}
                tasksLabel={descriptions[language].tasksPageTitle}
                authorPath={"/author"}
                authorLabel={descriptions[language].authorPageTitle}
            />
            <Switch>
                <Route path="/tasks/:id">
                    <TaskPage />
                </Route>
                <Route path="/tasks">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/tasks" />
                </Route>
            </Switch>
        </HashRouter>
    )
};

export default App;