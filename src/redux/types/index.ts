export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD'
export const SEARCH_CITIES = 'SEARCH_CITIES'
export const LISTEN_SEARCH_CITIES = 'LISTEN_SEARCH_CITIES'
export const ADD_CITY_WEATHER = 'ADD_CITY_WEATHER'
export const LISTEN_ADD_CITY_WEATHER = 'LISTEN_ADD_CITY_WEATHER'
export const DELETE_CITY_WEATHER = 'DELETE_CITY_WEATHER'

export type CityType = {
    city: string
    country: string
}

export type WeatherType = {
    temperature: string
    city: string
    country: string
    time: string
}
export type SetSearchKeywordAction = {
    type: typeof SET_SEARCH_KEYWORD
    payload: {
        keyword: string
    }
}

export type SearchCitiesAction = {
    type: typeof SEARCH_CITIES
    payload: {
        cities: CityType[]
    }
}

export type AddCityWeatherAction = {
    type: typeof ADD_CITY_WEATHER
    payload: {
        weather: WeatherType
    }
}

export type DeleteCityWeatherAction = {
    type: typeof DELETE_CITY_WEATHER
    payload: {
        weather: WeatherType
    }
}

export type AppAction = SearchCitiesAction | AddCityWeatherAction | DeleteCityWeatherAction | SetSearchKeywordAction

export type AppState = {
    cities: CityType[]
    searchKeyword: string
    weather: WeatherType[]
}



