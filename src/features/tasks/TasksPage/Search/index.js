import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import Input from "../../input"
import { Wrapper } from "./styled";

const Search = () => {
    const location = useLocation();
    const history = useHistory();

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("searchQueryParamName");

    const replaceQueryParameter = ({ value }) => {

        if (value) {
            searchParams.set("searchQueryParamName", value);
        } else {
            searchParams.delete("searchQueryParamName");
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};

export default Search;