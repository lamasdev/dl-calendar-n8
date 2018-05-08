import React, { Component } from 'react'
import Fade from '../hoc/Transitions';
import CalendarMonthly from "../components/CalendarMonthly";

export default class CalendarGrid extends Component {
  render() {
    const {handleReset, calendarArray} = this.props;
    const headerStyle = {
      position: 'fixed',
      top: 0,
      padding: 15,
      zIndex: 2,
      backgroundColor: 'white',
    }
    return (
        <Fade style={{paddingTop: 10}}>
          <div className="container" style={headerStyle}>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <button type="button" className="btn btn-danger" onClick={handleReset}>Clear</button>
              </li>
            </ul>
          </div>
          <div className="container" style={{marginTop: 65}}>
            <div className="row justify-content-start" style={{width: '100%', margin: 0}}>
              {
                calendarArray.map( (calendar, index ) => {
                  return(
                    <div key={index} className="card col-xs-12 col-sm-12 col-md-6 col-lg-4">
                      <CalendarMonthly calendar={calendar}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
       </Fade>
    )
  }
}
