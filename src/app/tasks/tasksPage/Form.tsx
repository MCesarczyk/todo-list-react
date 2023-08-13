import { FormEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';

import { addTask } from 'app/tasks/tasksSlice';
import { FormButtons } from 'ui/molecules/FormButtons';
import { Input } from 'ui/atoms/Input';
import { descriptions } from '~/common/languages/descriptions';
import { selectLanguage } from '~/common/languages/languageSlice';

export const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

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
      children: descriptions[language].formButtonInnerText,
    },
  ];

  return (
    <FormComponent onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder={descriptions[language].inputPlaceholder}
        onChange={({ target }) => setNewTaskContent(target.value)}
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
