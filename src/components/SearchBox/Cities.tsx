import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/types'

const Cities: React.FC = (): JSX.Element => {
    const {cities} = useSelector((state: AppState) => state)
    return (
        <div className='list_container'>
            <ul className="cities_ul">
                {cities.map(city => (
                    <li key={city.city}>
                        <p>{city.city},{' '}{city.country}</p>
                        <button >Add +</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cities