const Switcher = ({ languages }) => (
<div>
    {languages.map(language => (
        <button>{language.key}</button>
    ))}
</div>
);

export default Switcher;