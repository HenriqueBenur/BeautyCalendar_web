import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Primeiro, defina um tipo para os detalhes do serviço
type ServiceType = {
  id: number;
  title: string;
  description: string;
  price: string;
  offer: string;
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{id: any}>();
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceType | null>(null); // Use o tipo definido

  useEffect(() => {
    fetchServiceById(parseInt(id)).then(data => {
      setService(data); // Corrigido o tipo aqui
    }).catch(error => {
      console.error('Erro ao buscar detalhes do serviço:', error);
      navigate('/'); // Redireciona em caso de erro
    });
  }, [id, navigate]);

  const goBack = () => {
    navigate('/');
  };

  if (!service) {
    return <p>Carregando detalhes do serviço...</p>;
  }

  return (
    <div>
      <h1>Detalhes do Serviço {service.title}</h1>
      <p>{service.description}</p>
      <button onClick={goBack}>Voltar para a página principal</button>
    </div>
  );
};

export default ServiceDetail;

// Corrigir o tipo de serviceId para ser number
async function fetchServiceById(serviceId: number): Promise<ServiceType> {
  // Mock de dados retornados como exemplo
  return Promise.resolve({
    id: serviceId,
    title: 'Corte Estilo John Wick',
    description: 'Estilo matador impecável... Baba yaga',
    price: 'R$999,00',
    offer: 'Ainda essa semana!'
  });
}
