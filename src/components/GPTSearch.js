import React from 'react'
import {BG_URL} from "../utils/constants"
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL }
          alt="logo"
        />
      </div>
    < GPTSearchBar />
    < GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch;