import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { StyledNavBeam, StyledNavLink } from "./styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "./features/languages/languageSlice";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import descriptions from "./features/languages/descriptions";

const App = () => {
    const language = useSelector(selectLanguage);

    return (
        <HashRouter>
            <nav>
                <StyledNavBeam>
                    <li>
                        <StyledNavLink to="/tasks">
                            {descriptions[language].tasksPageTitle}
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/author">
                            {descriptions[language].authorPageTitle}
                        </StyledNavLink>
                    </li>
                </StyledNavBeam>
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
            </nav>
        </HashRouter>
    )
};

export default App;