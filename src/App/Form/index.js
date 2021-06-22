import { useState } from "react";
import { FormComponent, FormInput, Button } from "./styled";

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
        <FormComponent onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                placeholder={inputPlaceholder}
                onChange={({ target }) => setNewTaskContent(target.value)}
                autoFocus
            />
            <Button>{formButtonInnerText}</Button>
        </FormComponent>
    )
};

export default Form;