import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CarouselMenu from './components/CarouselMenu';
import ServiceCardList from './components/ServiceCardList';
import ServiceDetail from './components/ServiceDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <CarouselMenu />
              <ServiceCardList />
            </>
          } />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
