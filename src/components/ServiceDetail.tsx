import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type ServiceType = {
  id: string;
  title: string;
  description: string;
  price: string;
  offer: string;
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Dados mockados diretamente no estado
  const mockData: { [key: string]: ServiceType } = {
    '1a': { id: '1a', title: 'Bob Curto', description: 'Descrição do Bob Curto...', price: 'R$70', offer: 'Nova tendência!' },
    '1b': { id: '1b', title: 'Long Layers', description: 'Descrição do Long Layers...', price: 'R$80', offer: 'Mais vendido!' },
    '1c': { id: '1c', title: 'Pixie Cut', description: 'Descrição do Pixie Cut...', price: 'R$90', offer: 'Disponível agora!' },
    '2a': { id: '2a', title: 'Pedicure Simples', description: 'Descrição da Pedicure Simples...', price: 'R$30', offer: 'Novo!' },
    '2b': { id: '2b', title: 'Pedicure Completa', description: 'Descrição da Pedicure Completa...', price: 'R$45', offer: 'Últimos lugares!' },
    '3a': { id: '3a', title: 'Manicure Básica', description: 'Descrição da Manicure Básica...', price: 'R$25', offer: 'Disponível!' },
    '3b': { id: '3b', title: 'Manicure Francesinha', description: 'Descrição da Manicure Francesinha...', price: 'R$35', offer: 'Promoção especial!' }
  };

  // Garantir que 'id' sempre será uma string, usando coalescência nula com uma chave padrão ou tratamento para 'undefined'
  const safeId = id ?? 'defaultKey';
  const service = mockData[safeId];

  const goBack = () => {
    navigate('/');
  };

  if (!service) {
    return <p>Detalhes do serviço não encontrados ou carregando...</p>;
  }

  return (
    <div>
      <h1>Detalhes do Serviço {service.title}</h1>
      <p>{service.description}</p>
      <p>Preço: {service.price} - Oferta: {service.offer}</p>
      <button onClick={goBack}>Voltar para a página principal</button>
    </div>
  );
};

export default ServiceDetail;
