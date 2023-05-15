import { useSelector, useDispatch } from 'react-redux';
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIfAllDone,
} from '../../tasksSlice';
import { Element, Button } from '../styled';

interface ButtonsProps {
  setDoneButtonInnerText: string;
  toggleButtonInnerTextHidden: string;
  toggleButtonInnerTextVisible: string;
}

const Buttons = ({
  setDoneButtonInnerText,
  toggleButtonInnerTextHidden,
  toggleButtonInnerTextVisible,
}: ButtonsProps) => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const allDone = useSelector(selectIfAllDone);
  const dispatch = useDispatch();

  return (
    <Element>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone
              ? toggleButtonInnerTextHidden
              : toggleButtonInnerTextVisible}
          </Button>
          <Button onClick={() => dispatch(setAllDone())} disabled={allDone}>
            {setDoneButtonInnerText}
          </Button>
        </>
      )}
    </Element>
  );
};

export default Buttons;
