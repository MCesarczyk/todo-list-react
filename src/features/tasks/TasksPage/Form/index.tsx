import { nanoid } from '@reduxjs/toolkit';
import { FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../Input';
import { addTask } from '../../tasksSlice';
import { FormComponent, Button } from './styled';

interface FormProps {
  inputPlaceholder: string;
  formButtonInnerText: string;
}

const Form = ({ inputPlaceholder, formButtonInnerText }: FormProps) => {
  const [newTaskContent, setNewTaskContent] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();
    if (trimmedContent === '') {
      setNewTaskContent('');
      return;
    }

    dispatch(
      addTask({
        content: trimmedContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent('');
    if (inputRef.current !== null && 'focus' in inputRef.current) {
      inputRef.current.focus();
    }
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
  );
};

export default Form;
