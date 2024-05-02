import React from 'react';
import './ServiceCardList.css';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  offer?: string; // offer pode ser opcional, dependendo dos seus dados
}

interface ServiceData {
  [key: number]: Service[];
}

interface ServiceCardListProps {
  activeId: number;
}

const ServiceCardList = ({ activeId }: ServiceCardListProps) => {
  const serviceData: ServiceData = {
    1: [
      { id: '1a', title: 'Corte Clássico', description: 'Descrição do Corte Clássico...', price: 'R$ 50', offer: 'Disponível agora!' },
      { id: '1b', title: 'Corte Moderno', description: 'Descrição do Corte Moderno...', price: 'R$ 60', offer: 'Promoção!' }
    ],
    2: [
      { id: '2a', title: 'Pedicure Simples', description: 'Descrição da Pedicure Simples...', price: 'R$ 30', offer: 'Novo!' },
      { id: '2b', title: 'Pedicure Completa', description: 'Descrição da Pedicure Completa...', price: 'R$ 45', offer: 'Últimos lugares!' }
    ],
    3: [
      { id: '3a', title: 'Manicure Básica', description: 'Descrição da Manicure Básica...', price: 'R$ 25', offer: 'Disponível!' },
      { id: '3b', title: 'Manicure Francesinha', description: 'Descrição da Manicure Francesinha...', price: 'R$ 35', offer: 'Promoção especial!' }
    ],
  };

  const services = serviceData[activeId] || [];

  // Função para manipular o clique em um card
  const handleCardClick = (id: string) => {
    console.log("Clicado:", id); // Substitua isso pelo que você precisa fazer no clique
  };

  return (
    <div className="serviceCardList">
      {services.map(service => (
        <div key={service.id} className="serviceCard" onClick={() => handleCardClick(service.id)}>
          <div className="SideImg" style={{ backgroundImage: `/assets/image-${service.id}.png)` }}></div>
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
