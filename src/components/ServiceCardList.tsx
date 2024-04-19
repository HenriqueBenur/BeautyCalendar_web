import React from 'react';
import './ServiceCardList.css';
import { useNavigate } from 'react-router-dom'; // Importe apenas useNavigate

const ServiceCardList = () => {
  const navigate = useNavigate(); // Hook para usar o sistema de roteamento
  
  const services = [
    { id: 1, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 2, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 3, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 4, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 5, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 6, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 7, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 8, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 9, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' },
    { id: 10, title: 'Corte Estilo John Wick', description: 'Estilo matador impecável... Baba yaga', price: 'R$999,00', offer: 'Ainda essa semana!' }
  ];

  // Função para manipular o clique em um card
  const handleCardClick = (id: number) => {
    navigate(`/service/${id}`); // Use navigate para redirecionar para a rota de detalhes
  };

  return (
    <div className="serviceCardList">
      {services.map(service => (
        <div key={service.id} className="serviceCard" onClick={() => handleCardClick(service.id)}>
          <div className="SideImg"></div>
          <div className="info">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="value">
              <span id='price'>{service.price}</span>
              <div className="slash"></div>
              <span id='offer'>{service.offer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardList;
