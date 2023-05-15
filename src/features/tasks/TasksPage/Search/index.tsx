import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../languages/languageSlice';
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from '../queryParameters';
import { Wrapper } from './styled';
import Input from '../../Input';
import searchQueryParamName from '../searchQueryParamName';
import descriptions from '../../../languages/descriptions';
import { ChangeEvent } from 'react';

const Search = () => {
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

export default Search;
