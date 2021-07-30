import axios from 'axios';
import { getResults, addResults, errorResults } from '../context/actions';

const retrieveResults = (dispatch, topic, star, lang, page) => {
    // we will disaable the button so the user cannot hammer the server waiting for results
    dispatch(getResults());
    const queryString = 'q=topic:' + encodeURIComponent(topic)+`${lang}${star}&page=${page}`;
    axios.get(`https://api.github.com/search/repositories?${queryString}`)
        .then(function (response) {
            // the github search api only supports fetching up to 1000 pages so 
            // act accordingly
            const resultCount = Math.ceil(response.data.total_count / 30);
            dispatch(addResults(response.data.items,
                response.data.total_count,
                response.data.total_count === 0,
                resultCount > 1000 ? 1000 : resultCount,
                page))
        })
        .catch((reason) => {
            dispatch(errorResults(reason.response.data.message));
        });
}

export default retrieveResults;