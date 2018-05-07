import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';

import CalendarForm from '../components/CalendarForm';
import Calendar from '../components/Calendar';
import { buildCalendar } from '../helpers/helpers';

const defaultState = {
    Component: CalendarForm,
    startDate: new Date().toISOString().substring(0,10),
    numberDays: 1,
    countryCode: '',
    calendarArray: []
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
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {startDate, numberDays} = this.state;
    const calendarArray = buildCalendar(startDate, numberDays);
    this.setState({Component: Calendar, calendarArray});
  }

  render() {
    const {startDate, numberDays, countryCode, calendarArray, Component} = this.state;
    return (
      <div className="container">
        <TransitionGroup component={null}>
            <Component
              startDate = {startDate}
              numberDays = {numberDays}
              countryCode = {countryCode}
              calendarArray = {calendarArray}
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}
            />
        </TransitionGroup>      
      </div>
    )
  }
}
