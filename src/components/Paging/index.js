import './index.css'
import { Pagination } from 'react-bootstrap'
import retrieveResults from '../../service';
import React, { useContext } from 'react';
import { GithubContext } from '../../context';

export default function Paging() {
    const [state, dispatch] = useContext(GithubContext);

    const handlePageEvent = (page) => {
        retrieveResults(dispatch, state.currentTopic, state.sortStars, state.languages, page);
    }
    return (
        <Pagination size='sm' id='pager' data-testid="paging">
            <Pagination.First onClick={() => handlePageEvent(1)} />
            <Pagination.Prev disabled={state.currentPage === 1} onClick={() => handlePageEvent(state.currentPage - 1)} />
            <Pagination.Item>{state.currentPage}</Pagination.Item>
            <Pagination.Next disabled={state.currentPage === state.pages} onClick={() => handlePageEvent(state.currentPage + 1)} />
            <Pagination.Last onClick={() => handlePageEvent(state.pages)} />
        </Pagination>
    )
}