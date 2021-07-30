const GET_RESULTS = "GET_RESULTS";
const UPDATE_TOPICS = "UPDATE_TOPICS";
const UPDATE_SORT_STARS = "UPDATE_SORT_STARS";
const UPDATE_LANGUAGES = "UPDATE_LANGUAGES";
const ADD_RESULTS = "ADD_RESULTS";
const ERROR_RESULTS = "ERROR_RESULTS";

export function getResults() {
    return { type: GET_RESULTS }
}
export function updateTopics(currentTopic, lastTopic, results) {
    return {
        type: UPDATE_TOPICS,
        payload: {
            lastTopic: lastTopic,
            currentTopic: currentTopic,
            results:results
        }
    }
}
export function updateSortStars(stars) {
    return {
        type: UPDATE_SORT_STARS,
        payload: {
            sortStars: stars
        }
    }
}
export function updateLanguages(lang,array) {
    return { 
        type: UPDATE_LANGUAGES,
        payload: {
            languages: lang,
            languagesArray: array
          } 
    }
}
export function addResults(results, count, empty, pages, page) {
    return { type: ADD_RESULTS,
        payload: {
            results: results,
            count: count,
            empty: empty,
            pages: pages,
            currentPage:page
        }
     }
}
export function errorResults(error) {
    return { type: ERROR_RESULTS,
        payload: {
            error: error
        }
     }
}