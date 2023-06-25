import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  render() {
    const { currentDate } = this.state;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const calendarDays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDay = day === currentDate.getDate();
      const dayClassName = isCurrentDay ? 'calendar-day-active' : 'calendar-day';
      calendarDays.push(<div key={day} className={dayClassName}>{day}</div>);
    }

    return (
      <div className="calendar">
        <div className='calendar-top'>
            <p className='calendar-top__title'>КУЛИНАРНЫЙ КАЛЕНДАРЬ</p>
        </div>
        <div className='calendar-bottom'>
            <div className="calendar-bottom-header">
                <h2>{month} {year}</h2>
            </div>
            <div className="calendar-bottom-body">
                <div className="calendar-days">{calendarDays}</div>
            </div>
        </div>
      </div>
    );
  }

  goToPreviousMonth = () => {
    const { currentDate } = this.state;
    const previousMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    this.setState({ currentDate: previousMonthDate });
  };

  goToNextMonth = () => {
    const { currentDate } = this.state;
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    this.setState({ currentDate: nextMonthDate });
  };
}

export default Calendar;