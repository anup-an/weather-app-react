import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import Cities from '../components/SearchBox/Cities';
import makeStore from '../redux/store';
import SearchInput from '../components/SearchBox/SearchInput';
import WidgetList from '../components/WidgetList';
import { Store } from 'redux';
import { AppState, AppAction } from '../redux/types';

describe('Components', () => {
    let store: Store<AppState, AppAction> & {dispatch: unknown};
    beforeEach(() => {
        store = makeStore({
            cities: [{
                city: 'Kathmandu',
                country: 'Nepal',
            }],
            weather: [{
                temperature: 5,
                city: 'Kathmandu',
                country: 'India',
                time: '20:30',
                condition: 'Cloudy'
            }],
            searchKeyword: 'Kathmandu'
        })
    });
    it('Snapshot testing for <Cities> component', () => { 
    
        
        const wrapper = mount(
            <Provider store={store}>
                <Cities />
            </Provider>
        );
      
        expect(wrapper).toMatchSnapshot();
    })
    
    it('Snapshot testing for <SearchInput/> component', () => { 
            
        const wrapper = mount(
            <Provider store={store}>
                <SearchInput/>
            </Provider>
        );
        
    expect(wrapper).toMatchSnapshot();
    })

    it('Snapshot testing for <WidgetList/> component', () => { 
        const wrapper = mount(
            <Provider store={store}>
                <WidgetList/>
            </Provider>
        );
        
    expect(wrapper).toMatchSnapshot();
    })

})