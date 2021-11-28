import { AxiosResponse } from 'axios';

export const mockedCityResponse: AxiosResponse<any>= {
    data: {
        data: [{
            'id': 84919,
            'wikiDataId': 'Q3037',
            'type': 'CITY',
            'city': 'Kathmandu',
            'name': 'Kathmandu',
            'country': 'Nepal',
            'countryCode': 'NP',
            'region': 'Western Region',
            'regionCode': '3',
            'latitude': 27.716666666,
            'longitude': 85.366666666,
            'population': 975453
        }]
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
}

export const mockedWeatherResponse: AxiosResponse<any> = {
    data: {
    'coord': {
        'lon': 85.3167,
        'lat': 27.7167
    },
    'weather': [
        {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02n'
        }
    ],
    'base': 'stations',
    'main': {
        'temp': 288.27,
        'feels_like': 287.72,
        'temp_min': 288.27,
        'temp_max': 288.27,
        'pressure': 1021,
        'humidity': 72
    },
    'visibility': 6000,
    'wind': {
        'speed': 1.54,
        'deg': 220
    },
    'clouds': {
        'all': 20
    },
    'dt': 1638104265,
    'sys': {
        'type': 1,
        'id': 9201,
        'country': 'NP',
        'sunrise': 1638060601,
        'sunset': 1638098621
    },
    'timezone': 20700,
    'id': 1283240,
    'name': 'Kathmandu',
    'cod': 200
},
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
}