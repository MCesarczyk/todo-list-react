import { useEffect, useState } from 'react';
import Form from "./Form";
import Switcher from "./Switcher";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import Container from "./Container";

function App() {
  const [langId, setLangId] = useState(0);

  const languages = [
    {
      key: "PL",
      headerTitle: "Lista zadań",
      sectionTitle: "Dodaj nowe zadanie",
      tasksSectionTitle: "Lista zadań",
      inputPlaceholder: "Co jest do zrobienia?",
      formButtonInnerText: "Dodaj zadanie",
      setDoneButtonInnerText: "Ukończ wszystkie",
      toggleButtonInnerTextHidden: "Pokaż ukończone",
      toggleButtonInnerTextVisible: "Ukryj ukończone"
    },
    {
      key: "EN",
      headerTitle: "To-do list",
      sectionTitle: "Add new task",
      tasksSectionTitle: "List of tasks",
      inputPlaceholder: "What are you going to do?",
      formButtonInnerText: "Add task",
      setDoneButtonInnerText: "Finish all",
      toggleButtonInnerTextHidden: "Show done",
      toggleButtonInnerTextVisible: "Hide done"
    }
  ];

  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")
    ) ||
    [
      { id: 1, content: "task1", done: false },
      { id: 2, content: "task2", done: true },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ])
  };

  return (
    <Container>
      <Header title={languages[langId].headerTitle} />
      <Section
        title={languages[langId].sectionTitle}
        body={
          <Form
            addNewTask={addNewTask}
            inputPlaceholder={languages[langId].inputPlaceholder}
            formButtonInnerText={languages[langId].formButtonInnerText}
          />
        }
        extraHeaderContent={
          <Switcher languages={languages}/>
        }
      />
      <Section
        title={languages[langId].tasksSectionTitle}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
            setDoneButtonInnerText={languages[langId].setDoneButtonInnerText}
            toggleButtonInnerTextVisible={languages[langId].toggleButtonInnerTextVisible}
            toggleButtonInnerTextHidden={languages[langId].toggleButtonInnerTextHidden}
          />
        }
      />
    </Container>
  );
}

export default App;