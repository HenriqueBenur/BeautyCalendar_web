// src/components/AppointmentConfirmation.tsx
import React from 'react';
import './styles/AppointmentConfirmation.css';

interface AppointmentConfirmationProps {
  service: string;
  date: string;
  time: string;
  onClose: () => void;
}

const AppointmentConfirmation: React.FC<AppointmentConfirmationProps> = ({ service, date, time, onClose }) => {
  const handleOnClose = () => {
    onClose();
  };

  return (
    <div className="popup-background">
      <div className="popup">
        <button className="close-btn" onClick={handleOnClose}>×</button>
        <h2>Agendamento Confirmado</h2>
        <p>Serviço: {service}</p>
        <p>Data: {date}</p>
        <p>Hora: {time}</p>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
