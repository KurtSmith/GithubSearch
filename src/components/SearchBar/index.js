import './index.css';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {updateTopics} from '../../context/actions'
import logo from '../../assets/search.svg';
import retrieveResults from '../../service';
import { GithubContext } from '../../context';

export default function SearchBar(props) {

    const [state, dispatch] = useContext(GithubContext);
    const [searchEnabled, setSearchEnabled] = useState(false);
    const history = useHistory();

    const getResults = (e) => {
        dispatch(updateTopics(state.currentTopic, state.currentTopic,[]));
        const onDetailPage = history.location.pathname !== '/';
        retrieveResults(dispatch, state.currentTopic, state.sortStars, state.languages, 1);
        if (onDetailPage)
            history.goBack();
    }
    // i never want to click a button so lets intercept the enter key and search
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getResults();
        }
    }

    const inputChanged = (e) => {
        setSearchEnabled(e.target.value.length > 0);
        dispatch(updateTopics(e.target.value, state.lastTopic,state.results));
    }

    return (
        <InputGroup classlabel="mb-3">
            <FormControl
                data-testid="searchInput"
                placeholder="Enter repository name and click the search icon"
                aria-label="RepoSearch"
                aria-describedby="RepoSearch"
                value={state.currentTopic}
                onChange={inputChanged}
                onKeyDown={handleKeyDown}
                maxLength='50'
            />
            <Button onClick={getResults} data-testid="searchButton" className="btn btn-light" id="search" disabled={state.loading || !searchEnabled}>
                <img src={logo} alt="Search Repos" />
            </Button>
        </InputGroup>
    )
}