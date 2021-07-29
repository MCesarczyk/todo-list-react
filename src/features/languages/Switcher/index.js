import { Element, Button } from "./styled";

const Switcher = ({ languages, setLanguage }) => {

    const onLanguageChange = ({ target }) => {
        setLanguage(target.value);
    };

    return (
        <div>
            {Object.keys(languages).map((key) => (
                <Button
                    key={key}
                    value={key}
                    onClick={onLanguageChange}
                >
                    {key}
                </Button>
            ))}
        </div>
    )
};

export default Switcher;