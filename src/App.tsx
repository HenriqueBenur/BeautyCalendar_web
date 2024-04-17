import React from 'react';
import './App.css';
import Header from './components/Header';
import ServiceList from './components/ServiceList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ServiceList />
    </div>
  );
}

export default App;