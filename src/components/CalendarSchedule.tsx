// src/components/CalendarSchedule.tsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/CalendarSchedule.css';
import BackSVG from './assets/Svg/BackSVG';
import HamburgerSVG from './assets/Svg/HamburgerSVG';
import CalendarSVG from './assets/Svg/CalendarSVG';
import axios from 'axios';
import AppointmentConfirmation from './AppointmentConfirmation';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

const CalendarSchedule: React.FC = () => {
  const location = useLocation();
  const { serviceId, serviceName } = location.state as { serviceId: string; serviceName: string };
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDateChange = (newDate: Date | Date[]) => {
    if (Array.isArray(newDate)) {
      newDate = newDate[0];
    }
    if (newDate instanceof Date) {
      setDate(newDate);
      console.log('Selected date:', newDate.toDateString());
    }
  };

  const handleTimeSelection = (selectedTime: string) => {
    setTime(selectedTime);
    console.log(selectedTime);
  };

  const confirmAppointment = () => {
    if (!time || !date) {
      alert("Please select both a date and a time.");
      return;
    }
    api.post('/api/appointments', {
      serviceId,
      serviceName,
      date: date.toDateString(),
      time
    })
    .then(response => {
      console.log('Appointment scheduled:', response.data);
      setShowConfirmation(true);
    })
    .catch(error => {
      console.error('There was an error scheduling the appointment!', error);
      alert('Failed to schedule the appointment.');
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    alert('Retornando à tela inicial');
    navigate('/');
  };

  return (
    <div className='ScheduleBody'>
      <div className='calendarOverlay'>
        <div className='HeadElements'>
          <div className='ButtonsLayout'>
            <BackSVG />
            <HamburgerSVG />
          </div>
          <div className='HeadText'>
            <h1 className='ScheduleText'>Agendamento</h1>
            <CalendarSVG />
          </div>
        </div>
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
        <div className='TimeSelectors'>
          <button onClick={() => handleTimeSelection("09:00")}>09:00</button>
          <button onClick={() => handleTimeSelection("14:00")}>14:00</button>
          <button onClick={() => handleTimeSelection("18:00")}>18:00</button>
        </div>
        <div className='buttonCover'>
          <button className='ScheduleButton' onClick={confirmAppointment}>Confirmar Agendamento</button>
        </div>
      </div>
      {showConfirmation && (
        <AppointmentConfirmation
          service={serviceName}
          date={date.toDateString()}
          time={time}
          onClose={closeConfirmation}
        />
      )}
    </div>
  );
};

export default CalendarSchedule;
