import React from 'react';
import './CarouselMenu.css'; // Certifique-se de criar e importar o CSS apropriado

const CarouselMenu = () => {
  // Lista de serviços para demonstrar o funcionamento do carousel
  const services = [
    { id: 1, name: 'Cortes', style: 'Bubble1' },
    { id: 2, name: 'Pedicure', style: 'Bubble2' },
    { id: 3, name: 'Manicure', style: 'Bubble3' },
    { id: 4, name: 'Manicure', style: 'Bubble3' },
    { id: 5, name: 'Manicure', style: 'Bubble3' }
  ];

  return (
    <div className="Carousel">
      {services.map(service => (
        <div key={service.id} className={`${service.style}`}>
          <span className={`${service.name}`}>{service.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CarouselMenu;
