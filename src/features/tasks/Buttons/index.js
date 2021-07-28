import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Element, Button } from "./styled";

const Buttons = ({
    setDoneButtonInnerText,
    toggleButtonInnerTextHidden,
    toggleButtonInnerTextVisible
}) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Element>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? toggleButtonInnerTextHidden : toggleButtonInnerTextVisible}
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        {setDoneButtonInnerText}
                    </Button>
                </>
            )}
        </Element>
    )
};

export default Buttons;