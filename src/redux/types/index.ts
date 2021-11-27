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
    temperature: number
    city: string
    country: string
    time: string
    condition: string
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

export type CityResponseType = {
    data: {
    id: string,
    wikiDataId: string,
    type: string,
    city: string,
    name: string,
    country: string,
    countryCode: string,
    region: string,
    regionCode: string,
    latitude: number,
    longitude: number,
        population: number
    }[]
}

export type WeatherResponseType = {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number
    },
    "rain": {
        "1h": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number
}



