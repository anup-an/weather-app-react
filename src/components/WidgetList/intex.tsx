import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCityWeather } from '../../redux/actions'
import { AppState, WeatherType } from '../../redux/types'

const WidgetList: React.FC = (): JSX.Element => {
    const { weather } = useSelector((state: AppState) => state)
    const dispatch = useDispatch()
    const deleteWidget = (cityWeather: WeatherType) => {
        dispatch(deleteCityWeather(cityWeather))
    }
    return (
        <ul className="grid">
            {weather.map(cityWeather => (
                <li className="card">
                    <button onClick={() => deleteWidget(cityWeather)}>
                        <p>x</p>
                    </button>
                    <div>
                        <div>
                            <p>{cityWeather.temperature}</p>
                            <span id="celcius_symbol">&#8451;</span>
                        </div>                       
                        <div>
                            <p>{cityWeather.city}</p>
                            <p>{cityWeather.country}</p>
                            <p>{new Date().getHours()}:{new Date().getMinutes()}</p>
                        </div>
                    </div>
                    <p>{cityWeather.condition}</p>
                    
                </li>
            ))}
        </ul>
    )
}

export default WidgetList