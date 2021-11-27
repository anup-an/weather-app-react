import * as actions from '../redux/actions/index'
import { WeatherType } from '../redux/types'

describe('ACTIONS', () => {
    it(`should create an action with type 'SET_SEARCH_KEYWORD'`, () => {
        const keyword = "search"
        const expectedAction = {
            type: 'SET_SEARCH_KEYWORD',
            payload: {
                keyword: keyword
            }
        }
        expect(actions.setSearchKeyword(keyword)).toEqual(expectedAction)
    })

    it(`should create an action with type 'SEARCH_CITIES`, () => {
        const cities = [{ city: "Kathmandu", country: "Nepal" }]
        const expectedAction = {
            type: 'SEARCH_CITIES',
            payload: {
                cities: cities
            }
        }
        expect(actions.searchCities(cities)).toEqual(expectedAction)
    })

    it(`should create an action with type 'ADD_CITY_WEATHER`, () => {
        const weather: WeatherType = {
            temperature: 5,
            city: "Kathmandu",
            country: "Nepal",
            time: "21:45",
            condition: "Windy",
        } 
        const expectedAction = {
            type: 'ADD_CITY_WEATHER',
            payload: {
                weather: weather
            }
        }
        expect(actions.addCityWeather(weather)).toEqual(expectedAction)
    })

    it(`should create an action with type 'DELETE_CITY_WEATHER`, () => {
        const weather: WeatherType = {
            temperature: 5,
            city: "Kathmandu",
            country: "Nepal",
            time: "21:45",
            condition: "Windy",
        } 
        const expectedAction = {
            type: 'DELETE_CITY_WEATHER',
            payload: {
                weather: weather
            }
        }
        expect(actions.deleteCityWeather(weather)).toEqual(expectedAction)
    })
})