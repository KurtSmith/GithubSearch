import './index.css';
import React, { useContext, useRef, useEffect } from 'react';
import { GithubContext } from '../../context';
import retrieveResults from '../../service';
import { languages, sort, customStyles } from './SearchOptions';
import { updateSortStars, updateLanguages, updateTopics } from '../../context/actions'
import Select from 'react-select';

export default function RefineSearch() {

    const [state, dispatch] = useContext(GithubContext);
    const selectLangInputRef = useRef();
    const selectStarsInputRef = useRef();

    useEffect(()=>{
      if( state.languagesArray.length !== selectLangInputRef.current.select.getValue().length)
      {
        selectLangInputRef.current.select.setValue(state.languagesArray);
      }
      if( state.sortStars !== selectStarsInputRef.current.select.getValue()[0].value){
        selectStarsInputRef.current.select.setValue(sort.filter(result=>result.value === state.sortStars)[0])
      }
    });

    const getResults = (e) => {
      let stars = state.sortStars;
      let lang = state.languages;

      if (e.sortResults !== undefined) {
        stars = e.label === 'Rating' ? '&sort=stars' : '';
        dispatch(updateSortStars(stars));
      }
      else {
        lang = e.reduce((accum, curr) => accum + curr.value, '');
        // don't perform the search if we haven't changed the options
        if( lang === state.languages )
          return;       
        dispatch(updateLanguages(lang,e));
      }
  
      if (state.lastTopic !== state.currentTopic && state.lastTopic.length > 0) {
        dispatch(updateTopics(state.lastTopic, state.lastTopic));
      }

      retrieveResults(dispatch, state.currentTopic, stars, lang, 1);
    }
    return (
      <nav>
        <div className='resultFilter'>
          <Select className='multi-select'
            id='Sort'
            ref={selectStarsInputRef}
            closeMenuOnSelect={true}
            options={sort}
            styles={customStyles}
            onChange={getResults}
            className='multi-select'
            placeholder='Sort results'
            defaultValue={sort[0]}
          />
          <Select className='multi-select'
            id='Filter'
            ref={selectLangInputRef}
            closeMenuOnSelect={true}
            isMulti
            options={languages}
            styles={customStyles}
            onChange={getResults}
            className='multi-select'
            placeholder='Filter results'
          />
        </div>
      </nav>
    )
  }