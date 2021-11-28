import { put, takeEvery, takeLatest } from '@redux-saga/core/effects'
import axios, { AxiosResponse } from 'axios'
import { Action } from 'redux'
import { all, select } from 'redux-saga/effects'

import { addCityWeather, searchCities } from '../actions'
import { ADD_CITY_WEATHER, AppAction, AppState, CityResponseType, CityType, DELETE_CITY_WEATHER, LISTEN_ADD_CITY_WEATHER, LISTEN_SEARCH_CITIES, WeatherResponseType, WeatherType } from '../types'

export type CityInputType = {
    keyword: string
}

export type WeatherInputType = {
    name: string
    country: string
}
export type AppActionType = Action & AppAction & CityInputType & WeatherInputType

// Api call to city API
export async function callCityApi(keyword: string) {
    try {
        const response: AxiosResponse<CityResponseType> = await axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${keyword}`)
        return response
    } catch (error) {
        console.log(error)
    }
}

// Api call to weather API
export async function callWeatherApi(name: string) {
    try {
        const response: AxiosResponse<WeatherResponseType> = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=1e9e35761dc83e1c61236cc9333bd5fe`)
        return response
    } catch (error) {
        alert(`Weather information not available for the city '${name}'`)
        console.log(error)
    }
}

export function* searchCitiesSaga(search: CityInputType) {
    const { keyword } = search
    try {
        if (keyword !== '') {
            const response: AxiosResponse<CityResponseType> = yield callCityApi(keyword)
            if (response) {
                const cities: CityType[] | undefined = response.data.data.map(foundCity => ({ city: foundCity.name, country: foundCity.country }))
                yield put(searchCities(cities))
            } else {
                yield put(searchCities([]))
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export function* addWeatherSaga(city: WeatherInputType) {
    const {name, country} = city
    try {    
        const response: AxiosResponse<WeatherResponseType> = yield callWeatherApi(name)
        if (response) {            
            const weather: WeatherType = {
                city: response.data.name,
                country: country,
                temperature: Math.round(response.data.main.temp),
                time: new Date().getHours() + ':' + new Date().getMinutes(),
                condition: response.data.weather[0].main
            }
            yield put(addCityWeather(weather))
        }
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
        searchCitiesActionWatcher(),
        addWeatherActionWatcher(),
        saveWeatherActionWatcher()
    ])
}