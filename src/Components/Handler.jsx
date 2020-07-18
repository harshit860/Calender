import React, { Component } from 'react';
import { connect } from 'react-redux';
import {previous} from './../Redux/Actions/Previousmonth'
import {next} from './../Redux/Actions/Nextmonth'

class Handler extends Component 
{
        constructor(props){
            super(props)
            this.state = {

            }
        }
    render() {
        return (
            <div className="col-xl-12 m-3 row">
                <div className="col-2">
                    <button className="btn border" onClick={()=>this.props.previous()}>{'<----'}</button>
                    <button className="btn border" onClick={()=>this.props.next()}>{'---->'}</button>
                </div>
                <div className="col-1">
                    <h5 className ="p-2 text-left">{this.props.Month}</h5>
                </div>
                <div className="col-1 text-left">
                    <h5 className ="p-2">{this.props.Year}</h5>
                </div>
                <div className="col-4">
                    <input className="rounded-pill"></input>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let monthName = state.Months[state.PresentMonth]
    console.log(monthName)

    return {
        Month: monthName,
        Year: state.Year,
        Days: state.Number_of_days,
        ActiveDate: state.ActiveDay
    }
}

const mapDispatchToProps = dispatch => {
    return {
        previous:()=>dispatch(previous()),
        next:()=>dispatch(next())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Handler)
