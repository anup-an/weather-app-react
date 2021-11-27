import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, LISTEN_ADD_CITY_WEATHER } from '../../redux/types'

const Cities: React.FC = (): JSX.Element => {
    const { cities } = useSelector((state: AppState) => state)
    const dispatch = useDispatch()
    const addWeatherWidget = (city: string, country: string) => {
        dispatch({type: LISTEN_ADD_CITY_WEATHER, name: city, country: country})
    }
    return (
        <div className='list_container'>
            <ul className="cities_ul">
                {cities.map(city => (
                    <li key={city.city}>
                        <p>{city.city},{' '}{city.country}</p>
                        <button onClick={() => addWeatherWidget(city.city, city.country)}>Add +</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cities