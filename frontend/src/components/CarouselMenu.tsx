import React, { useState, useEffect } from 'react';
import './styles/CarouselMenu.css';
import ServiceCardList from './ServiceCardList';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

type ServiceType = {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  offer: string;
};

const CarouselMenu = () => {
  const [activeId, setActiveId] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    api.get('/api/services')
      .then(response => {
        const services: ServiceType[] = response.data.services;
        const uniqueCategories = Array.from(new Set(services.map(service => service.category)));
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('There was an error fetching the services data!', error);
      });
  }, []);

  return (
    <div className="ContainerCr">
      <div className='Carousel'>
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`Bubble-${activeId === index + 1 ? 'active' : ''}`}
            onClick={() => setActiveId(index + 1)}
          >
            <span>{category}</span>
          </div>
        ))}
      </div>
      <ServiceCardList activeId={activeId} />
    </div>
  );
};

export default CarouselMenu;
