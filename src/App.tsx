// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CarouselMenu from './components/CarouselMenu';
import ServiceCardList from './components/ServiceCardList';
import ServiceDetail from './components/ServiceDetail';
import CalendarSchedule from './components/CalendarSchedule';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <CarouselMenu />
              <ServiceCardList activeId={1} />
            </>
          } />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/calendar" element={<CalendarSchedule />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;