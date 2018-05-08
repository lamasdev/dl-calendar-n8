import { monthNames } from './../data/calendar-data';
import {
    colorWeek,
    colorWeekend,
    colorDisabled
} from './../data/colors';

export const buildCalendar = (startDate, numberDays) => {
    const calendarArray = [];
    let currentDate = new Date(startDate);
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));

    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let date = currentDate.getDate();
    let dayWeek = currentDate.getDay();
    let days = [];
    days = new Array(dayWeek).fill( {day: 0, type: 'disabled', dayString: "", color: colorDisabled} );
    days.push( {day: date, ...getTypeDay(dayWeek), name: getDayName(dayWeek), dayString: titleDay(date)} );

    for(let i = 1; i <= numberDays; i++){
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        if(currentMonth !== currentDate.getMonth()){
            let filledArray = [];
            if(dayWeek !== 6){
                filledArray = new Array(6 - dayWeek).fill( {day: 0, type: 'disabled', dayString: "", color: colorDisabled} );
            }
            const month = {
                title: monthNames[currentMonth] + ' ' + currentYear,
                weeks: getWeeks([...days].concat(...filledArray))
            };
            calendarArray.push({...month});
            dayWeek = currentDate.getDay();
            date = currentDate.getDate();
            days = new Array(dayWeek).fill( {day: 0, type: 'disabled', dayString: "", color: colorDisabled} );
            days.push( {day: date, ...getTypeDay(dayWeek), name: getDayName(dayWeek), dayString: titleDay(date)} );
            if(currentYear !== currentDate.getFullYear()){
                currentYear = currentDate.getFullYear();
            }
            currentMonth = currentDate.getMonth();
        }else if(i === +numberDays){
            let filledArray = [];
            if(dayWeek !== 6){
                filledArray = new Array(6 - dayWeek).fill( {day: 0, type: 'disabled', dayString: "", color: colorDisabled} );
            }
            const month = {
                title: monthNames[currentMonth] + ' ' + currentYear,
                weeks: getWeeks([...days].concat(...filledArray))
            };
            calendarArray.push({...month});
        }else{
            dayWeek = currentDate.getDay();
            date = currentDate.getDate();
            days.push( {day: date, ...getTypeDay(dayWeek), name: getDayName(dayWeek), dayString: titleDay(date)} );
        }
    }
    return calendarArray;
}

export const getWeeks = (days) => {
    const numWeeks = days.length / 7;
    const weeks = [];
    for(let i = 0; i<numWeeks; i++){
        weeks.push(days.slice(i*7, i*7+7));
    }
    return weeks;
}

export const getTypeDay = (day) => {
    if(day === 6 || day === 0){
        return {type: 'weekend', color: colorWeekend};
    }
    return {type: 'week', color: colorWeek};
}

export const titleDay = (date) => {
    if(date < 10){
        return '0'+date;
    }
    return ''+date;
}

export const getDayName = (day) => {
    switch (day) {
        case 0:
            return 'sunday';
        case 1:
            return 'monday';
        case 2:
            return 'tuesday';
        case 3:
            return 'wednesday';
        case 4:
            return 'thursday';
        case 5:
            return 'friday';
        case 6:
            return 'saturday';
        default:
            break;
    }
}
