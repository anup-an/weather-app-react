import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { addCityWeather, searchCities } from '../redux/actions';
import {addWeatherSaga, addWeatherActionWatcher, AppActionType, callCityApi, callWeatherApi, saveWeatherActionWatcher, saveWeatherWithSaga, searchCitiesActionWatcher, searchCitiesSaga} from '../redux/sagas/index'
import { ADD_CITY_WEATHER, CityDataType, CityType, DELETE_CITY_WEATHER, LISTEN_ADD_CITY_WEATHER, LISTEN_SEARCH_CITIES, WeatherType } from '../redux/types';
import { mockedCityResponse, mockedWeatherResponse } from '../utils';

const getCityUrl = (keyword: string, field: string) => {
  if (field === 'city') {
    return `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${keyword}`
  } else if (field === 'weather') {
    return `http://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&appid=1e9e35761dc83e1c61236cc9333bd5fe`
  }
  
}

// TESTING API CALLS
describe('TESTING API CALLS', () => {
  it(`test the city api call `, async () => {
    jest.mock('axios')
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(mockedCityResponse);
    const keyword = 'kathmandu'
    const response = await callCityApi(keyword)
    expect(mockedAxios.get).toHaveBeenCalledWith(getCityUrl(keyword, 'city'));
    expect(response).toEqual(mockedCityResponse);
  })

  it(`test the weather api call `, async () => {
    jest.mock('axios')
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(mockedWeatherResponse);
    const keyword = 'kathmandu'
    const response = await callWeatherApi(keyword)
    expect(mockedAxios.get).toHaveBeenCalledWith(getCityUrl(keyword, 'weather'));
    expect(response).toEqual(mockedWeatherResponse);
  })
})


// TESTING SAGAS
describe('TESTING SAGAS', () => {
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

  it(`searchCitiesSaga should dispatch action 'SEARCH_CITIES' `, () => {
     
    const search = {
      keyword: 'kathmandu'
    }
    const mockCities: CityType[] = mockedCityResponse.data.data.map((city: CityDataType)  => ({city: city.city, country: city.country}))
    const generator = searchCitiesSaga(search);
    generator.next();
    expect(generator.next(mockedCityResponse).value)
       .toEqual(put(searchCities(mockCities)))
      expect(generator.next().done).toBeTruthy();
   })

   it(`searchCitiesSaga should dispatch action 'SEARCH_CITIES' `, () => {
     
    const search = {
      keyword: 'kathmandu'
    }
    const mockCities: CityType[] = mockedCityResponse.data.data.map((city: CityDataType)  => ({city: city.city, country: city.country}))
    const generator = searchCitiesSaga(search);
    generator.next();
    expect(generator.next(mockedCityResponse).value)
       .toEqual(put(searchCities(mockCities)))
      expect(generator.next().done).toBeTruthy();
   })

   it(`addWeatherSaga should dispatch action 'ADD_CITY_WEATHER' `, () => {
    const city = {
      name: 'Kathmandu',
      country: 'Nepal'
    }
    const mockedWeather: WeatherType = {
        city: mockedWeatherResponse.data.name,
        country: city.country,
        temperature: Math.round(mockedWeatherResponse.data.main.temp),
        time: new Date().getHours() + ':' + new Date().getMinutes(),
        condition: mockedWeatherResponse.data.weather[0].main
    } 
    const generator = addWeatherSaga(city);
    generator.next();
    expect(generator.next(mockedWeatherResponse).value)
       .toEqual(put(addCityWeather(mockedWeather)))
      expect(generator.next().done).toBeTruthy();
   })

})
