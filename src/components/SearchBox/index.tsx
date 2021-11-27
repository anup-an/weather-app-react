import React from 'react'
import Cities from './Cities'
import SearchInput from './SearchInput'

const SearchBox: React.FC = (): JSX.Element => {
    return (
        <div className='search_box'>
            <SearchInput />
            <Cities />
        </div>
    )
}

export default SearchBox