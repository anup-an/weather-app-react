import React from 'react'
import '../src/styles/App.css'
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import WidgetList from './components/WidgetList/intex';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="main">
      <header>
        <Header />
      </header>
      <div id="search_box">
        <SearchBox />
      </div>
        <div id="widget_box">
          <WidgetList/>
        </div>
    </div>
  );
}

export default App;
