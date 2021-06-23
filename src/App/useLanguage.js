import { useState, useEffect } from "react";
// import languages from "./languages";

export const useLanguage = () => {
    const languages = [
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
      },
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
      }
    ];
    
    // export default languages;
    const [langId, setLangId] = useState(localStorage.getItem("langId") || 0);

    useEffect(() => {
      localStorage.setItem("langId", langId);
    }, [langId]);

    const changeLanguage = (key) => {
      setLangId(languages.findIndex(language => language.key === key));
    };

    return { langId, languages, changeLanguage, };
  }