import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import { Events } from './../Redux/Actions/Events'

function Days(props) {

    const [days, handleDays] = useState(props.total)
    const [weekdays, handleWeekDays] = useState(['M', 'T', 'W', 'T', 'F', 'S', 'S'])
    const [modalOpen, handleModal] = useState(false)
    const [eventFlag, handleFlag] = useState(false)
    const [eventTitle, handleTitle] = useState('')
    const [eventInfo, handleInfo] = useState('')
    const [day, handleDay] = useState(0)
    const [events,handleEvents] = useState(props.Events)
    const setDay = (val) => {
        handleDay(val)
    }
    const closeModal = () => {
        handleModal(false)
    }
    const change = (e) => {
        if (e.target.name == 'eventTitle') {
            handleTitle(e.target.value)
        }
        if (e.target.name == 'eventInfo') {
            handleInfo(e.target.value)
        }
    }
    const openModal = (val) => {
        console.log("hi")
        handleDay(val)
        handleModal(true)
    }

    const catchInfo = () => {
        let date = day + '-' + props.Month + '-' + props.Year
        
        let sendObj = {
            eventDate: date,
            title: eventTitle,
            info: eventInfo
        }
        props.event(sendObj)
    }
    const changeEvent = () => {
        handleFlag(prev => !prev)
    }


    useEffect(() => {
        handleDays(props.total)
        handleEvents(props.Events)
    }, [props.total])
let newar = []
   
    
    
    let daydiv = days.map((val, index) => {
        let btns = []   
        
        //     if(events !== null)
        //     {
            events.map(eventvalue => {
                if (val == eventvalue.eventDate.split('-')[0]) {
                        btns.push(<button className="btn border">{eventvalue.title}</button>)
                }
            })
        // }
        
        

        let indx = index + 1

        if (props.active !== null) {
            if (props.ActiveDate == val) {

                newar.push(<div className="active col-1 bg-primary text-white p-2  " onClick={() => openModal(val)} style={{ height: '50%' }}>
                    {val}
                    {btns.map(btnn => {
                        return btnn
                    })}
                    </div>)
                if (indx % 7 == 0) {
                    newar.push(<span className="col-xl-4"></span>)
                }
            }
            else {
                newar.push(<div className="active col-1 p-2 border " style={{ height: '50%' }} onClick={() => openModal(val)}>
                    {val}
                    {btns.map(btnn => {
                        return btnn
                    })}
                    </div>)
                if (indx % 7 == 0) {
                    newar.push(<span className="col-xl-5"></span>)
                }
            }
        }
        else {
            newar.push(<div className="active col-1 p-2 border " style={{ height: '50%' }} onClick={() => openModal(val)}>{val}</div>)
            if (indx % 7 == 0) {
                newar.push(<span className="col-xl-5"></span>)
            }
        }


    })


    return (
        <React.Fragment>
            <div>

            </div>
            <div className="col-12 row ">
                {weekdays.map(val => {
                    return <div className="col-1 border">{val}</div>
                })}
            </div>
            <div className="col-12 row ">
                {newar.map(val => val)}
            </div>

            <div>
                <Dialog onClose={closeModal} aria-labelledby="simple-dialog-title" open={modalOpen}>
                    <div className="m-3">
                        <div className="p-3">
                            <input name="eventTitle" placeholder="Add Title" onChange={(e) => change(e)}></input>
                            {eventFlag ? (
                                <React.Fragment>
                                    <button className="btn-primary btn" >Event</button>
                                    <button className="btn " onClick={() => changeEvent()}>Reminder</button>
                                </React.Fragment>

                            ) : (
                                    <React.Fragment>
                                        <button className=" btn" onClick={() => changeEvent()}>Event</button>
                                        <button className="btn btn-primary">Reminder</button>
                                    </React.Fragment>
                                )}
                        </div>
                        <div className="p-4">
                            <h5>Info About Event</h5>
                            <textarea name="eventInfo" placeholder="Add Info" multiple={true} onChange={(e) => change(e)}></textarea>
                        </div>
                        <div>
                            <button onClick={() => catchInfo()} className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </Dialog>
            </div>
            <div>

            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {

    let monthName = state.Months[state.PresentMonth]
    console.log(monthName)

    return {
        total: state.Days,
        Month: monthName,
        Year: state.Year,
        Days: state.Number_of_days,
        ActiveDate: state.ActiveDay,
        Events: state.Events
    }
}
const mapDispatchToProps = dispatch => {
    return {
        event: (val) => dispatch(Events(val))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Days)
