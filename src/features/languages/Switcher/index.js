import { useDispatch } from "react-redux";
import { changeLanguage } from "../languageSlice";
import { Button } from "./styled";

const Switcher = ({ descriptions }) => {
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
    )
};

export default Switcher;