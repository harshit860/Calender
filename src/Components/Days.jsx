import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function Days(props) {
    const [days, handleDays] = useState([])
    const [weekdays, handleWeekDays] = useState(['M', 'T', 'W', 'T', 'F', 'S', 'S'])


    useEffect(() => {
        for (let a = 1; a <= props.Days; a++) {
            handleDays(prevar => [...prevar, a])
        }
    }, [handleDays])


    let newar = []
    let daydiv = days.map((val, index) => {
        console.log(index + 1, val)
        let indx = index + 1
        
        
            if (props.ActiveDate == val) {
                
                newar.push(<div className="active col-1 bg-primary text-white p-2  " style={{ height: '50%' }}>{val}</div>)
                if(indx %7 ==0)
                {
                 newar.push(<span className="col-xl-4"></span>)   
                }
            }
            else {
                newar.push(<div className="active col-1 p-2 border " style={{ height: '50%' }}>{val}</div>)
                if(indx %7 ==0)
                {
                 newar.push(<span className="col-xl-5"></span>)   
                }
            }
        
    })

    return (
        <React.Fragment>
            <div className="col-12 row ">
                {weekdays.map(val => {
                    return <div className="col-1 border">{val}</div>
                })}
            </div>
            <div className="col-12 row ">
                {newar.map(val =>  val)}
            </div>
        </React.Fragment>
    )
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

export default connect(
    mapStateToProps
)(Days)
