import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { selectLanguage } from 'features/languages/languageSlice';
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from 'features/tasks/tasksPage/queryParameters';
import searchQueryParamName from 'features/tasks/tasksPage/searchQueryParamName';
import { descriptions } from 'features/languages/descriptions';
import { Input } from 'features/tasks/tasksPage/Input';

export const Search = () => {
  const language = useSelector(selectLanguage);
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: event.target.value.trim() !== '' ? event.target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder={descriptions[language].searchLabelPlaceholder}
        value={query || ''}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
