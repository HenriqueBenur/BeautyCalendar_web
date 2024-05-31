// src/components/CalendarSchedule.tsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/CalendarSchedule.css';
import BackSVG from './assets/Svg/BackSVG';
import HamburgerSVG from './assets/Svg/HamburgerSVG';
import CalendarSVG from './assets/Svg/CalendarSVG';

const CalendarSchedule: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>('');

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
    console.log(`Time selected: ${selectedTime}`);
  };

  const confirmAppointment = () => {
    if (!time || !date) {
      alert("Please select both a date and a time.");
      return;
    }
    console.log(`Appointment scheduled on ${date.toDateString()} at ${time}.`);
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
          <button onClick={() => handleTimeSelection("9:00")}>9:00 AM</button>
          <button onClick={() => handleTimeSelection("14:00")}>2:00 PM</button>
          <button onClick={() => handleTimeSelection("18:00")}>6:00 PM</button>
        </div>
        <div className='buttonCover'>
          <button className='ScheduleButton' onClick={confirmAppointment}>Confirmar Agendamento</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarSchedule;
