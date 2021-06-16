import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask, inputPlaceholder, formButtonInnerText }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = newTaskContent.trim();
        if (trimmedContent === "") {
            setNewTaskContent("");
            return;
        }
        addNewTask(trimmedContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder={inputPlaceholder}
                onChange={({ target }) => setNewTaskContent(target.value)}
                autoFocus
            />
            <button className="form__button">{formButtonInnerText}</button>
        </form>
    )
};

export default Form;