import { useDispatch } from 'react-redux';
import { descriptions } from 'common/languages/descriptions';
import { changeLanguage } from 'common/languages/languageSlice';

export const useButtons = () => {
  const dispatch = useDispatch();

  const languageKeys = Object.keys(descriptions);

  const buttons = [
    {
      key: 1,
      value: languageKeys[0],
      onClick: () => dispatch(changeLanguage(languageKeys[0])),
    },
    {
      key: 2,
      value: languageKeys[1],
      onClick: () => dispatch(changeLanguage(languageKeys[1])),
    },
  ];

  return { buttons };
};