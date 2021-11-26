import { call, put, takeLatest, takeEvery, all } from "@redux-saga/core/effects"
import axios, { AxiosResponse } from "axios"
import { addCityWeather, searchCities } from "../actions"
import { ADD_CITY_WEATHER, AppAction, SEARCH_CITIES } from "../types"
import { Action } from "redux"

type CityInputType = {
    keyword: string
}

type WeatherInputType = {
    name: string
}
type AppActionType = Action & AppAction & CityInputType & WeatherInputType

function* searchCitiesSaga(search: CityInputType) {
    const {keyword} = search
    try {    
        const response: AxiosResponse = yield call(axios.get, `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${keyword}`)
        yield put(searchCities(response.data))
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
        takeLatest<AppActionType>(SEARCH_CITIES, searchCitiesSaga),
        takeEvery<AppActionType>(ADD_CITY_WEATHER, addWeatherSaga)
    ])
}