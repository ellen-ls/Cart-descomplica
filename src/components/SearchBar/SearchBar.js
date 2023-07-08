import React, {useState} from 'react'
import {BsSearchHeart} from 'react-icons/bs'

import './SearchBar.css'

function SearchBar(){

    const[searchValue, setSearchValue] = useState('')
  return (
  
          <form className='search-bar'>
                <input 
                type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                className="search_input"
                onChange={({target})=> setSearchValue(target.value)}
                required
                />
                
                <button type="submit" className="search_button">
                    <BsSearchHeart/>
                </button>
                
            </form>
   
  )
}

export default SearchBar
