import { monthNames } from './../data/calendar-data';

export const buildCalendar = (startDate, numberDays) => {
    const calendarArray = [];
    let currentDate = new Date(startDate);
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));

    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let date = currentDate.getDate();
    let dayWeek = currentDate.getDay();
    let days = [];
    days = new Array(dayWeek).fill( {day: 0, type: 'disabled'} );
    days.push( {day: date, type: getTypeDay(dayWeek), name: getDayName(dayWeek)} );

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
            days = new Array(dayWeek).fill( {day: 0, type: 'disabled'} );
            days.push( {day: date, type: getTypeDay(dayWeek), name: getDayName(dayWeek)} );
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
            days.push( {day: date, type: getTypeDay(dayWeek), name: getDayName(dayWeek)} );
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
