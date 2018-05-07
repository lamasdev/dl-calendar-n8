import { monthNames } from './../data/calendar-data';

export const buildCalendar = (startDate, numberDays) => {
    const calendarArray = [];
    let currentDate = new Date(startDate);

    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let date = currentDate.getDate();
    let dayWeek = currentDate.getDay();
    let days = [];
    if(dayWeek < 6){
        days = new Array(dayWeek).fill( {day: 0, type: 'disabled'} );
        days.push( {day: date, type: getTypeDay(dayWeek)} );
    }else{
        days.push( {day: 6, type: 'weekend'} );
    }

    for(let i = 1; i <= numberDays; i++){
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        if(currentMonth !== currentDate.getMonth()){
            let filledArray = [];
            if(dayWeek !== 6){
                filledArray = new Array(6 - dayWeek).fill( {day: 0, type: 'disabled'} );
            }
            const month = {
                title: monthNames[currentMonth] + ' ' + currentYear,
                days: [...days].concat(...filledArray)
            };
            calendarArray.push({...month});
            dayWeek = currentDate.getDay();
            date = currentDate.getDate();
            if(dayWeek < 6){
                days = new Array(dayWeek).fill( {day: 0, type: 'disabled'} );
                days.push( {day: date, type: getTypeDay(dayWeek)} );
            }else{
                days.push( {day: 6, type: 'weekend'} );
            }
            if(currentYear !== currentDate.getFullYear()){
                currentYear = currentDate.getFullYear();
            }
            currentMonth = currentDate.getMonth();
        }else if(i === +numberDays){
            let filledArray = [];
            if(dayWeek !== 6){
                filledArray = new Array(6 - dayWeek).fill( {day: 0, type: 'disabled'} );
            }
            const month = {
                title: monthNames[currentMonth] + ' ' + currentYear,
                days: [...days].concat(...filledArray)
            };
            calendarArray.push({...month});
        }else{
            dayWeek = currentDate.getDay();
            date = currentDate.getDate();
            days.push( {day: date, type: getTypeDay(dayWeek)} );
        }
    }
    return calendarArray;
}

export const getTypeDay = (day) => {
    if(day === 6 || day === 0){
        return 'weekend';
    }
    return 'week';
}
