import React from 'react'
import Cities from './Cities'
import SearchInput from './SearchInput'

const SearchBox: React.FC = (): JSX.Element => {
    return (
        <div>
            <SearchInput />
            <Cities />
        </div>
    )
}

export default SearchBox