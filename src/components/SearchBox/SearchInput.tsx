import React from 'react'
import '../../styles/App.css'

const SearchInput: React.FC = (): JSX.Element => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //make a post request 
    }
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