import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import './transitions.css';
import Header from './components/Header';
import CarouselMenu from './components/CarouselMenu';
import ServiceCardList from './components/ServiceCardList';
import ServiceDetail from './components/ServiceDetail';
import CalendarSchedule from './components/CalendarSchedule';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './components/styles/themes.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  const { theme } = useTheme();  // Using the theme from ThemeContext

  return (
    <div data-theme={theme}>
      <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="slide">
        <Routes location={location}>
          <Route path="/" element={
            <>
              <div className='separatorTab1'>
                <Header />
                <CarouselMenu />
              </div>
            </>
          } />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/calendar" element={<CalendarSchedule />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
