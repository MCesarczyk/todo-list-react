const location = useLocation();
const history = useHistory();

export const useQueryParameter = (searchQueryParameterName) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(searchQueryParameterName);
};

export const useReplaceQueryParameter = (key, value) => {
    const searchParams = new URLSearchParams(location.search);
    
    if (value === undefined) {
        searchParams.delete(key);
    } else {
        searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
};