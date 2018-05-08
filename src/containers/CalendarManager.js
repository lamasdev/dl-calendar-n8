import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';

import CalendarForm from '../components/CalendarForm';
import CalendarGrid from './CalendarGrid';
import { buildCalendar } from '../helpers/helpers';
import isoCountries from '../data/iso-country';

const defaultState = {
    Component: CalendarForm,
    startDate: new Date().toISOString().substring(0,10),
    numberDays: 1,
    countryCode: '',
    calendarArray: [],
    error: false
}

export default class CalendarManager extends Component {
  
  state = {
    ...defaultState
  }

  handleReset = () => {
    this.setState({...defaultState});
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: typeof value === 'string' ? value.toUpperCase() : value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {startDate, numberDays, countryCode} = this.state;
    const validCountryCode = isoCountries.find(country => country.ccode === countryCode);
    if(validCountryCode && startDate !== "" && numberDays > 0){
      const calendarArray = buildCalendar(startDate, numberDays);
      this.setState({Component: CalendarGrid, calendarArray});
    }else{
      this.setState({error: true});
    }
  }

  render() {
    const {startDate, numberDays, countryCode, error, calendarArray, Component} = this.state;
    return (
      <div className="container">
        <TransitionGroup component={null}>
            <Component
              startDate = {startDate}
              numberDays = {numberDays}
              countryCode = {countryCode}
              error = {error}
              calendarArray = {calendarArray}
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}
              handleReset = {this.handleReset}
            />
        </TransitionGroup>      
      </div>
    )
  }
}
