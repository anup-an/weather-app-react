import { call, put, takeLatest, takeEvery } from "@redux-saga/core/effects"
import { all } from 'redux-saga/effects'
import axios, { AxiosResponse } from "axios"
import { addCityWeather, searchCities } from "../actions"
import { AppAction, CityType, LISTEN_ADD_CITY_WEATHER, LISTEN_SEARCH_CITIES} from "../types"
import { Action } from "redux"

type CityInputType = {
    keyword: string
}

type WeatherInputType = {
    name: string
}
type AppActionType = Action & AppAction & CityInputType & WeatherInputType

type CityResponseType = {
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

function* searchCitiesSaga(search: CityInputType) {
    const { keyword } = search
    try {
        if (keyword !== '') {
            const response: AxiosResponse<CityResponseType> = yield call(axios.get, `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${keyword}`)
            const cities: CityType[] = response.data.data.map(foundCity => ({ city: foundCity.name, country: foundCity.country })) 
            yield put(searchCities(cities))
        } else {
            yield put(searchCities([]))
        }
    } catch (error) {
        console.log(error)
    }
}

function* addWeatherSaga(city: WeatherInputType) {
    const {name} = city
    try {    
        const response: AxiosResponse = yield call(axios.get, `api.openweathermap.org/data/2.5/weather?q=${name}&appid=1e9e35761dc83e1c61236cc9333bd5fe`)
        yield put(addCityWeather(response.data))
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest<AppActionType>(LISTEN_SEARCH_CITIES, searchCitiesSaga),
        takeEvery<AppActionType>(LISTEN_ADD_CITY_WEATHER, addWeatherSaga)
    ])
}