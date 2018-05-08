import React from 'react'
import Fade from '../hoc/Transitions';

const CalendarForm = (props) => {
    const {startDate, numberDays, countryCode, error} = props;
    return (
        <Fade>
            <div className="row align-items-center" style={{height: '100vh', margin: 0}}>
                <div className="row justify-content-center" style={{width: '100%', margin: 0}}>
                    <div className="card col-xs-12 col-md-12 col-lg-8">
                        <div className="card-body">
                        <form className="col-12" onSubmit={props.handleSubmit} noValidate={error}>
                            <div className="form-group row">
                            <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="date" id="startDate" name="startDate" value={startDate} onChange={props.handleChange} required/>
                                {
                                    startDate === "" &&
                                    <div className="invalid-feedback" style={{display: 'block'}}>
                                        Please set a valid date.
                                    </div>
                                }
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="numberDays" className="col-sm-2 col-form-label">Number of Days</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="number" id="numberDays" name="numberDays" min="1" value={numberDays} onChange={props.handleChange} required/>
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="countryCode" className="col-sm-2 col-form-label">Country Code</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="countryCode" name="countryCode" placeholder="e.g: US" value={countryCode} onChange={props.handleChange} required/>
                                {
                                    error &&
                                    <div className="invalid-feedback" style={{display: 'block'}}>
                                        Please type a valid country code. e.g: 'US' .
                                    </div>
                                }
                            </div>
                            </div>
                            <div className="row justify-content-center">
                            <button type="submit" className="col-4 btn btn-primary">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default CalendarForm;
