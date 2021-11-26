import React from 'react';
import '../src/styles/App.css'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="main">
      <header >
        <h3>ambine</h3>
        <h1>Weather</h1>
      </header>
      <main>
        <h1>Search input</h1>
        <h2>Weather widgets here</h2>
      </main>
    </div>
  );
}

export default App;
