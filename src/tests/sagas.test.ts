import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import {addWeatherActionWatcher, addWeatherSaga, AppActionType, saveWeatherActionWatcher, saveWeatherWithSaga, searchCitiesActionWatcher, searchCitiesSaga} from '../redux/sagas/index'
import { ADD_CITY_WEATHER, DELETE_CITY_WEATHER, LISTEN_ADD_CITY_WEATHER, LISTEN_SEARCH_CITIES, SEARCH_CITIES } from '../redux/types';
import mockAxios from 'axios';

describe('SAGAS', () => {
  it(`should listen to type 'LISTEN_SEARCH_CITIES' `, () => {
    const generator = searchCitiesActionWatcher();
    expect(generator.next().value)
      .toEqual(takeLatest<AppActionType>(LISTEN_SEARCH_CITIES, searchCitiesSaga));
    expect(generator.next().done).toBeTruthy();
  })

  it(`should listen to type 'LISTEN_ADD_CITY_WEATHER'`, () => {
    const generator = addWeatherActionWatcher();
    expect(generator.next().value)
      .toEqual(takeEvery<AppActionType>(LISTEN_ADD_CITY_WEATHER, addWeatherSaga));
    expect(generator.next().done).toBeTruthy();
  })

  it(`should listen to type 'ADD_CITY_WEATHER' and 'DELETE_CITY_WEATHER'`, () => {
    const generator = saveWeatherActionWatcher();
    expect(generator.next().value)
      .toEqual(takeEvery<AppActionType>([ADD_CITY_WEATHER, DELETE_CITY_WEATHER], saveWeatherWithSaga));
    expect(generator.next().done).toBeTruthy();
  })
})
