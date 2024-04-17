import React from 'react';
import './ServiceList.css';
import ServiceCard from './ServiceCard';

const ServiceList: React.FC = () => {
  // Example list of services
  const services = [
    { id: 1, name: 'Corte de Cabelo', description: 'Descrição...', price: 'R$ ---' },
    // Add more services as needed
  ];

  return (
    <div className="service-list">
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}

export default ServiceList;