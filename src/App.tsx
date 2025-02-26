import React from 'react';
import './App.css';
import Counter from './components/counter/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Try GitHub Actions.
        </p>
      </header>
    </div>
  );
}

export default App;
