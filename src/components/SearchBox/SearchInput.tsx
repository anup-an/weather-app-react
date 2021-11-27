import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../hooks';
import { searchCities, setSearchKeyword } from '../../redux/actions';
import { AppState, LISTEN_SEARCH_CITIES } from '../../redux/types';
import '../../styles/App.css'

const SearchInput: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const {searchKeyword} = useSelector((state: AppState) => state)
    const debouncedKeyword = useDebounce(searchKeyword, 2000);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch({type: LISTEN_SEARCH_CITIES, keyword: searchKeyword})
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchKeyword(event.target.value))
    }

    useEffect(
        () => {
            if (debouncedKeyword && debouncedKeyword !== '') {
                console.log(debouncedKeyword)
                dispatch({ type: LISTEN_SEARCH_CITIES, keyword: debouncedKeyword })               
            } else {
                dispatch(searchCities([]))
            }
        }, [debouncedKeyword]
    );
    
    return (
        <div className='search_container'>
        <form onSubmit={handleSubmit} className='search-form'>        
            <label htmlFor="keywords">
                <input
                    id="keywords"
                    name="keywords"
                    type="text"
                    placeholder="Search for a city"
                        className="input"
                        onChange={handleInputChange}
                    size={100}
                />
                        </label>
                <button className="search-button">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='icon'
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                        </svg> 
                </button>

            
            </form>
            </div>
    )
}

export default SearchInput