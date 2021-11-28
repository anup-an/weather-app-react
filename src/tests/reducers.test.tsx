import reducer from '../redux/reducers/index'
import { AppState, WeatherType } from '../redux/types'

describe('REDUCER', () => {
    let initialState: AppState;
    beforeEach(() => {
        initialState = {
            cities: [],
            searchKeyword: '',
            weather: [{
                temperature: 5,
                city: 'Kathmandu',
                country: 'Nepal',
                time: '21:45',
                condition: 'Windy',
            }]
        }
    })
    
    it(`should handle 'SET_SEARCH_KEYWORD' action`, () => {
        const keyword: string = 'test'
        expect(reducer(initialState, { type: 'SET_SEARCH_KEYWORD', payload: {keyword: keyword}  })).
        toEqual({
            cities: [],
            searchKeyword: 'test',
            weather: [{
                temperature: 5,
                city: 'Kathmandu',
                country: 'Nepal',
                time: '21:45',
                condition: 'Windy',
            }]
        })
    })

    it(`should handle 'SEARCH_CITIES' action`, () => {
        const cities = [{city: 'Kathmandu', country: 'Nepal'}]
        expect(reducer(initialState, { type: 'SEARCH_CITIES', payload: {cities: [...cities]}  })).
        toEqual({
            cities: [...cities],
            searchKeyword: '',
            weather: [{
                temperature: 5,
                city: 'Kathmandu',
                country: 'Nepal',
                time: '21:45',
                condition: 'Windy',
            }]
        })
    })

    it(`should handle 'ADD_CITY_WEATHER' action`, () => {
        const weather: WeatherType = {
            temperature: 5,
            city: 'Kathmandu',
            country: 'Nepal',
            time: '21:45',
            condition: 'Windy',
        }   
        expect(reducer(initialState, { type: 'ADD_CITY_WEATHER', payload: {weather: weather}  })).
        toEqual({
            cities: [],
            searchKeyword: '',
            weather: [{ ...weather }]
        })
    })

    it(`should handle 'DELETE_CITY_WEATHER' action`, () => {
        const initialState: AppState = {
            cities: [],
            searchKeyword: '',
            weather: [{
                temperature: 5,
                city: 'Kathmandu',
                country: 'Nepal',
                time: '21:45',
                condition: 'Windy',
            }]
        }
        const weather = {
            temperature: 5,
            city: 'Kathmandu',
            country: 'Nepal',
            time: '21:45',
            condition: 'Windy',
        }   
        expect(reducer(initialState, { type: 'DELETE_CITY_WEATHER', payload: {weather: weather}  })).
        toEqual({
            cities: [],
            searchKeyword: '',
            weather: []
        })
    })


    
})