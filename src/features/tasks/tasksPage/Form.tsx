import { FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { addTask } from 'features/tasks/tasksSlice';
import { FormButtons } from 'ui/molecules/FormButtons';
import { Input } from 'ui/atoms/Input';

interface FormProps {
  inputPlaceholder: string;
  formButtonInnerText: string;
}

export const Form = ({ inputPlaceholder, formButtonInnerText }: FormProps) => {
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
      }),
    );

    setNewTaskContent('');
    if (inputRef.current !== null && 'focus' in inputRef.current) {
      inputRef.current.focus();
    }
  };

  const buttons = [
    {
      id: 1,
      variant: 'PRIMARY',
      onClick: undefined,
      children: formButtonInnerText,
    },
  ];

  return (
    <FormComponent onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder={inputPlaceholder}
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus
      />
      <FormButtons buttons={buttons} />
    </FormComponent>
  );
};

export const FormComponent = styled.form`
  background-color: ${({ theme }) => theme.color.background};
  padding: 10px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    flex-direction: column;
  }
`;
