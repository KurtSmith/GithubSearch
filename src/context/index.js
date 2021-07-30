import React, { useReducer } from "react";

export const GithubContext = React.createContext();

const initialState = {
    loading: false,
    count: 0,
    searchTerm: '',
    results: [],
    currentTopic: '',
    lastTopic: '',
    sortStars: '',
    languages: '',
    languagesArray: [],
    error: '',
    empty:false,
    pages: 1,
    currentPage: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_RESULTS":
            return { ...state, loading: true, empty:false };
        case "UPDATE_TOPICS":
            return { ...state, currentTopic: action.payload.currentTopic, lastTopic: action.payload.lastTopic, results: action.payload.results};
        case "UPDATE_SORT_STARS":
            return { ...state, sortStars: action.payload.sortStars };
        case "UPDATE_LANGUAGES":
            return { ...state, languages: action.payload.languages, languagesArray:action.payload.languagesArray};
        case "ADD_RESULTS":
            return { ...state, 
                count: action.payload.count, 
                results: action.payload.results, 
                loading: false, 
                error: '', 
                sort: '', 
                empty: action.payload.empty,
                pages: action.payload.pages,
                currentPage:action.payload.currentPage
            };
        case "ERROR_RESULTS":
            return { ...state, loading: false, error: action.payload.error };
        default:
            return { ...state };
    }
};

const GithubContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GithubContext.Provider value={[state, dispatch]}>
            {props.children}
        </GithubContext.Provider>
    );
}
export default GithubContextProvider;