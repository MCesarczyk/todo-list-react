import { useRef, useState } from "react";
import { FormComponent, FormInput, Button } from "./styled";

const Form = ({ addNewTask, inputPlaceholder, formButtonInnerText }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = newTaskContent.trim();
        if (trimmedContent === "") {
            setNewTaskContent("");
            return;
        }
        addNewTask(trimmedContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <FormComponent onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
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