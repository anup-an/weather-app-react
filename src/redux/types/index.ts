export const SEARCH_CITIES = 'SEARCH_CITIES'
export const ADD_CITY_WEATHER = 'ADD_CITY_WEATHER'
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

export type AppAction = SearchCitiesAction | AddCityWeatherAction | DeleteCityWeatherAction

export type AppState = {
    cities: CityType[]
    searchKeyword: string
    weather: WeatherType[]
}



