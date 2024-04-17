import React from 'react';
import './ServiceCard.css';

type ServiceCardProps = {
  name: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, price }) => {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="service-footer">
        <span className="price">{price}</span>
        <span className="availability">Ainda essa semana!</span>
      </div>
    </div>
  );
}

export default ServiceCard;