import axios from 'axios';
import { getResults, addResults, errorResults } from '../context/actions';

const retrieveResults = (dispatch, topic, star, lang, page) => {
    dispatch(getResults());
    const queryString = 'q=topic:' + encodeURIComponent(topic)+`${lang}${star}&page=${page}`;
    axios.get(`https://api.github.com/search/repositories?${queryString}`)
        .then(function (response) {
            dispatch(addResults(response.data.items,
                response.data.total_count,
                response.data.total_count === 0,
                Math.ceil(response.data.total_count / 30),
                page))
        })
        .catch((reason) => {
            dispatch(errorResults(reason.response.data.message));
        });
}

export default retrieveResults;