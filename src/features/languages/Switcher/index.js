const Switcher = ({ languages, setLanguage }) => {

    const onLanguageChange = ({ target }) => {
        setLanguage(target.value);
    };

    return (
        <div>
            {Object.keys(languages).map((key) => (
                <button
                    key={key}
                    value={key}
                    onClick={onLanguageChange}
                >
                    {key}
                </button>
            ))}
        </div>
    )
};

export default Switcher;