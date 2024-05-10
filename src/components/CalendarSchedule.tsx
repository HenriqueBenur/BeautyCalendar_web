// src/components/CalendarSchedule.tsx
import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarSchedule.css';

const CalendarSchedule: React.FC = () => {
  const [date, setDate] = useState<CalendarProps['value']>(new Date());

  const handleDateChange = (selectedDate: CalendarProps['value']) => {
    if (selectedDate instanceof Date) {
      setDate(selectedDate);
      console.log('Data selecionada:', selectedDate);
    }
  };

  return (
    <div className='calendarBody'>
      <h2>Selecione a data para o agendamento</h2>
      <div className='calendarContainer'>
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <button className='confirmBtn'>Confirmar Agendamento</button>
    </div>
  );
};

export default CalendarSchedule;
