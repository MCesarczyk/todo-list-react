import { useDispatch } from 'react-redux';
import { changeLanguage } from '../languageSlice';
import { Button } from './styled';
import { Descriptions } from 'types';

interface SwitcherProps {
  descriptions: Descriptions;
}

export const Switcher = ({ descriptions }: SwitcherProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      {Object.keys(descriptions).map((key) => (
        <Button
          key={key}
          value={key}
          onClick={() => dispatch(changeLanguage(key))}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};
