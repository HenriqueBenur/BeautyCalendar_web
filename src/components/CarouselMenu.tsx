// src/components/CarouselMenu.tsx
import React, { useState } from 'react';
import './styles/CarouselMenu.css';
import ServiceCardList from './ServiceCardList';

const CarouselMenu = () => {
  const [activeId, setActiveId] = useState<string>('1a');

  const services = [
    { id: '1a', name: 'Cortes' },
    { id: '2a', name: 'Pedicure' },
    { id: '3a', name: 'Manicure' },
  ];

  return (
    <div className="ContainerCr">
      <div className='Carousel'>
        {services.map(service => (
          <div
            key={service.id}
            className={`Bubble-${activeId === service.id ? 'active' : ''}`}
            onClick={() => setActiveId(service.id)}
          >
            <span>{service.name}</span>
          </div>
        ))}
      </div>
      <ServiceCardList activeId={activeId} />
    </div>
  );
};

export default CarouselMenu;
