import React from 'react';
import './App.css';
import Header from './components/Header';
import CarouselMenu from './components/CarouselMenu'
import ServiceCardList from './components/ServiceCardList';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CarouselMenu />
      <ServiceCardList />
    </div>
  );
}

export default App;