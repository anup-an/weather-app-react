import { call, put, takeLatest, takeEvery } from "@redux-saga/core/effects"
import { all, select } from 'redux-saga/effects'
import axios, { AxiosResponse } from "axios"
import { addCityWeather, searchCities } from "../actions"
import { ADD_CITY_WEATHER, AppAction, AppState, CityResponseType, CityType, DELETE_CITY_WEATHER, LISTEN_ADD_CITY_WEATHER, LISTEN_SEARCH_CITIES, WeatherResponseType, WeatherType} from "../types"
import { Action } from "redux"

export type CityInputType = {
    keyword: string
}

export type WeatherInputType = {
    name: string
    country: string
}
export type AppActionType = Action & AppAction & CityInputType & WeatherInputType

export function* searchCitiesSaga(search: CityInputType) {
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

export function* addWeatherSaga(city: WeatherInputType) {
    const {name, country} = city
    try {    
        const response: AxiosResponse<WeatherResponseType> = yield call(axios.get, `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=1e9e35761dc83e1c61236cc9333bd5fe`)
        const weather: WeatherType = {
            city: response.data.name,
            country: country,
            temperature: Math.round(response.data.main.temp),
            time: new Date().getHours() + ':' + new Date().getMinutes(),
            condition: response.data.weather[0].main
        }
        yield put(addCityWeather(weather))
    } catch (error) {
        console.log(error)
    }
}

export function* saveWeatherWithSaga() {
  try {
    const state: AppState = yield select()
    yield localStorage.setItem('weather', JSON.stringify(state.weather))
  } catch (error) {
    console.log(error)
  }
}

export function* searchCitiesActionWatcher() {
    yield takeLatest<AppActionType>(LISTEN_SEARCH_CITIES, searchCitiesSaga)
}

export function* addWeatherActionWatcher() {
    yield takeEvery<AppActionType>(LISTEN_ADD_CITY_WEATHER, addWeatherSaga)
}

export function* saveWeatherActionWatcher() {
    yield takeEvery<AppActionType>([ADD_CITY_WEATHER, DELETE_CITY_WEATHER], saveWeatherWithSaga)
}

export default function* rootSaga() {
    yield all([
        takeLatest<AppActionType>(LISTEN_SEARCH_CITIES, searchCitiesSaga),
        takeEvery<AppActionType>(LISTEN_ADD_CITY_WEATHER, addWeatherSaga),
        takeEvery<AppActionType>([ADD_CITY_WEATHER, DELETE_CITY_WEATHER], saveWeatherWithSaga)
    ])
}