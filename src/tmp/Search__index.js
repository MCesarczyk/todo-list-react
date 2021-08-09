import Input from "../../input"
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParameterName from "../searchQueryParamName"
import { Wrapper } from "./styled";

const Search = () => {
    // ../queryParameters
    const location = useLocation();
    const history = useHistory();
    
    const useQueryParameter = (searchQueryParameterName) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(searchQueryParameterName);
    };

    const useReplaceQueryParameter = (key, value) => {
        const searchParams = new URLSearchParams(location.search);
        
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    // ../queryParameters
    const query = useQueryParameter(searchQueryParameterName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParameterName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });


        // const searchParams = new URLSearchParams(location.search);

        // if (target.value.trim() === "") {
        //     searchParams.delete("searchQueryParamName");
        // } else {
        //     searchParams.set("searchQueryParamName", target.value);
        // }

        // history.push(`${location.pathname}?${searchParams.toString()}`);
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