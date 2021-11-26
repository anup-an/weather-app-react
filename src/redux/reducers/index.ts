import { AppAction, AppState } from "../types";
import * as t from '../types' 

const initialState: AppState = {
    cities: [],
    searchKeyword: '',
    weather: []
}

const reducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case t.SEARCH_CITIES:
            return { ...state, cities: [...action.payload.cities] }
        case t.ADD_CITY_WEATHER: 
            return { ...state, weather: [...state.weather, action.payload.weather] }
        case t.DELETE_CITY_WEATHER: 
            const updatedList = [...state.weather].filter(weather => weather.city !== 'city')
            return { ...state, weather: [...updatedList] }
        default:
            return state
    }
    
}

export default reducer
