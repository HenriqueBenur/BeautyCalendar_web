import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ServiceCardList.css';

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
      { id: '1a', title: 'Bob Curto', description: 'Perfeito para quem busca um visual prático e moderno. Este corte na altura do queixo oferece versatilidade e estilo.', price: 'R$ 70', offer: 'Nova tendência!' },
      { id: '1b', title: 'Long Layers', description: 'Camadas longas que adicionam movimento e leveza aos cabelos longos. Ideal para dar volume e forma sem sacrificar o comprimento.', price: 'R$ 80', offer: 'Mais vendido!' },
      { id: '1c', title: 'Pixie Cut', description: 'Corte super curto que combina praticidade e ousadia. Fácil de manter e perfeito para um look cheio de atitude.', price: 'R$ 90', offer: 'Disponível agora!' }
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

  const navigate = useNavigate();
  const services = serviceData[activeId] || [];

  // Função para manipular o clique em um card
  const handleCardClick = (id: string) => {
    // Navega para a página de detalhes do serviço
    navigate(`/service/${id}`);
  };

  return (
    <div className="serviceCardList">
      {services.map(service => (
        <div id="serviceCard" key={service.id} className= {`Service${service.id}`} onClick={() => handleCardClick(service.id)}>
          <div className={`SideImg${service.id}`} id="sideImg"></div>
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
