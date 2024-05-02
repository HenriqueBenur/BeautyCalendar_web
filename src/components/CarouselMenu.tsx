import React, { useState } from 'react';
import './CarouselMenu.css';
import ServiceCardList from './ServiceCardList';

const CarouselMenu = () => {
  const [activeId, setActiveId] = useState(1);

  const services = [
    { id: 1, name: 'Cortes' },
    { id: 2, name: 'Pedicure' },
    { id: 3, name: 'Manicure' }
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