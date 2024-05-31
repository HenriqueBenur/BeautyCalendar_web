// src/components/ServiceDetail.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackSVG from './assets/Svg/BackSVG';
import HamburgerSVG from './assets/Svg/HamburgerSVG';
import './styles/ServiceDetail.css';

type ServiceType = {
  id: string;
  category?: string;
  title: string;
  description: string;
  price: string;
  offer: string;
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const mockData: { [key: string]: ServiceType } = {
    '1a': { id: '1a', category: 'Corte de Cabelo', title: 'Bob Curto', description: 'Descrição do Bob Curto...', price: 'R$70', offer: 'Nova tendência!' },
    '1b': { id: '1b', category: 'Corte de Cabelo', title: 'Long Layers', description: 'Descrição do Long Layers...', price: 'R$80', offer: 'Mais vendido!' },
    '1c': { id: '1c', category: 'Corte de Cabelo', title: 'Pixie Cut', description: 'Descrição do Pixie Cut...', price: 'R$90', offer: 'Disponível agora!' },
    '2a': { id: '2a', category: 'Serviço de', title: 'Pedicure Simples', description: 'Descrição da Pedicure Simples...', price: 'R$30', offer: 'Novo!' },
    '2b': { id: '2b', category: 'Serviço de', title: 'Pedicure Completa', description: 'Descrição da Pedicure Completa...', price: 'R$45', offer: 'Últimos lugares!' },
    '3a': { id: '3a', category: 'Serviço de', title: 'Manicure Básica', description: 'Descrição da Manicure Básica...', price: 'R$25', offer: 'Disponível!' },
    '3b': { id: '3b', category: 'Serviço de', title: 'Manicure Francesinha', description: 'Descrição da Manicure Francesinha...', price: 'R$35', offer: 'Promoção especial!' }
  };

  const safeId = id ?? 'defaultKey';
  const service = mockData[safeId];

  const goBack = () => {
    navigate('/');
  };

  const goToCalendar = () => {
    navigate('/calendar');
  };

  if (!service) {
    return <p>Detalhes do serviço não encontrados ou carregando...</p>;
  }

  return (
    <div className='detailBody'>
      <div className='separatorTab2'>
        <div className='HeaderInfo'>
          <div className='ButtonContainer'>
            <BackSVG/>
            <HamburgerSVG />
          </div>
          <h1 className='serviceTitle'>{service.category + ' '}{service.title}</h1>
        </div>
        <div className='imgDetail' id={`Img${service.id}`}></div>
        <p className='descriptionDetail'>{service.description}</p>
        <p className='priceDetail'>{service.price}</p>
        <p className='offerDetail'>{service.offer}</p>
        <button className='scheduleBtn' onClick={goToCalendar}>Agendar</button>
      </div>
    </div>
  );
};

export default ServiceDetail;
