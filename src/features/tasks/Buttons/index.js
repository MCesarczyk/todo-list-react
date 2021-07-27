import { Element, Button } from "./styled";

const Buttons = ({
    tasks,
    hideDone,
    toggleHideDone,
    setAllDone,
    setDoneButtonInnerText,
    toggleButtonInnerTextHidden,
    toggleButtonInnerTextVisible
}) => (
    <Element>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? toggleButtonInnerTextHidden : toggleButtonInnerTextVisible}
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    {setDoneButtonInnerText}
                </Button>
            </>
        )}
    </Element>

);

export default Buttons;