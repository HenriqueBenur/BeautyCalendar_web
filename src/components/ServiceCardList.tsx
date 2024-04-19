import React from 'react';
import './ServiceCardList.css'; // Caminho para o arquivo CSS

const ServiceCardList = () => {
  // Dados simulados para demonstração
  const services = [
    { id: 1, title: 'Pintura de Mechas', description: 'Realce sua beleza com brilho e luminosidade para um visual deslumbrante!', price: 'R$330', offer: 'Ainda essa semana!' },
    { id: 2, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 3, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 4, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 5, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 6, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 7, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 8, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 9, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' },
    { id: 10, title: 'Corte Feminino', description: 'Transforme seu visual com nossos especialistas em corte.', price: 'R$280', offer: 'Promoção de Verão!' }
    ];

  return (
    <div className="serviceCardList">
      {services.map(service => (
        <div key={service.id} className="serviceCard">
          <div className="SideImg" style={{ backgroundImage: 'url(image.png)' }}></div>
          <div className="info">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="value">
              <span>{service.price}</span>
              <div className="slash"></div>
              <span>{service.offer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardList;
