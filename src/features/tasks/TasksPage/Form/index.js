import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";
import { FormComponent, Button } from "./styled";

const Form = ({ inputPlaceholder, formButtonInnerText }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = newTaskContent.trim();
        if (trimmedContent === "") {
            setNewTaskContent("");
            return;
        }

        dispatch(addTask({
            content: trimmedContent,
            done: false,
            id: nanoid()
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <FormComponent onSubmit={onFormSubmit}>
            <Input
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