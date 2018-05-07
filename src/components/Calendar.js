import React, { Component } from 'react'
import Fade from '../hoc/Transitions';
// import { dayNames, monthNames } from './../data/calendar-data';

export default class Calendar extends Component {
  render() {
    console.log(this.props);
    return (
        <Fade>
            <p>
                Hi, i'm a Calendar
            </p>
       </Fade>
    )
  }
}
