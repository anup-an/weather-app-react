import { CityType, AppAction, SEARCH_CITIES, WeatherType, ADD_CITY_WEATHER, DELETE_CITY_WEATHER } from "../types"

export const searchCities = (cities: CityType[]): AppAction => {
    return {
        type: SEARCH_CITIES,
        payload: {
            cities: cities 
        }
    }
}

export const addCityWeather = (weather: WeatherType): AppAction => {
    return {
        type: ADD_CITY_WEATHER,
        payload: {
            weather: weather 
        }
    }
}

export const deleteCityWeather = (weather: WeatherType): AppAction => {
    return {
        type: DELETE_CITY_WEATHER,
        payload: {
            weather: weather 
        }
    }
}