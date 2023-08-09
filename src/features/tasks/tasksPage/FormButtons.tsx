import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { selectTasks, toggleHideDone, setAllDone, selectHideDone, selectIfAllDone } from 'features/tasks/tasksSlice';
import { Button } from 'ui/atoms/Button';

interface FormButtonsProps {
  setDoneButtonInnerText: string;
  toggleButtonInnerTextHidden: string;
  toggleButtonInnerTextVisible: string;
}

export const FormButtons = ({
  setDoneButtonInnerText,
  toggleButtonInnerTextHidden,
  toggleButtonInnerTextVisible,
}: FormButtonsProps) => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const allDone = useSelector(selectIfAllDone);
  const dispatch = useDispatch();

  return (
    <ButtonsWrapper>
      {tasks.length > 0 && (
        <>
          <Button variant='TEXT' onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? toggleButtonInnerTextHidden : toggleButtonInnerTextVisible}
          </Button>
          <Button variant='TEXT' onClick={() => dispatch(setAllDone())} disabled={allDone}>
            {setDoneButtonInnerText}
          </Button>
        </>
      )}
    </ButtonsWrapper>
  );
};

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;
