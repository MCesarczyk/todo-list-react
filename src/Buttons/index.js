import "./style.css";

const Buttons = ({
    tasks,
    hideDone,
    toggleHideDone,
    setAllDone,
    setDoneButtonInnerText,
    toggleButtonInnerTextHidden,
    toggleButtonInnerTextVisible
}) => (
    <div className="buttons__element">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone ? toggleButtonInnerTextHidden : toggleButtonInnerTextVisible}
                </button>
                <button
                    onClick={setAllDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    {setDoneButtonInnerText}
                </button>
            </>
        )}
    </div>

);

export default Buttons;