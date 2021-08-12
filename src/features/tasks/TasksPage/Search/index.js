import { useSelector } from "react-redux";
import { selectLanguage } from "../../../languages/languageSlice";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { Wrapper } from "./styled";
import Input from "../../Input"
import searchQueryParamName from "../searchQueryParamName";
import descriptions from "../../../languages/descriptions";

const Search = () => {
    const language = useSelector(selectLanguage);
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder={descriptions[language].searchLabelPlaceholder}
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};

export default Search;