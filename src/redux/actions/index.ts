import { CityType, AppAction, SEARCH_CITIES, WeatherType, ADD_CITY_WEATHER, DELETE_CITY_WEATHER, SET_SEARCH_KEYWORD } from "../types"

export const setSearchKeyword = (keyword: string): AppAction => {
    return {
        type: SET_SEARCH_KEYWORD,
        payload: {
            keyword: keyword 
        }
    }
}

export const searchCities = (cities: CityType[]): AppAction => {
    return {
        type: SEARCH_CITIES,
        payload: {
            cities: cities 
        }
    }
}

export const addCityWeather = (weather: WeatherType): AppAction => {
    console.log(weather)
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