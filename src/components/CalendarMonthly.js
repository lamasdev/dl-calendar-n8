import React from 'react'
import { dayNames } from './../data/calendar-data';

export const CalendarMonthly = (props) => {
  const {title, weeks} = props.calendar;
  
  return(
    <div className="card-body">
      <h5 className="card-title text-center">
        {title}
      </h5>
      <table className="table table-sm table-borderless">
          <thead>
            <tr>
              {dayNames.map((dayName, index) => <th className="text-center" key={index} scope="col">{dayName}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              weeks.map((week, index) => {
                return(
                  <tr key={index}>
                    {
                      week.map((day, index) => {
                        return(
                          <td className={`${day.color} text-center`} key={index}>{day.dayString}</td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default CalendarMonthly;
