import React from 'react'
import {connect} from 'react-redux'
import Days from './Days'
import Handler from './Handler'

function Main() {
    return (
        <div className="col-xl-12 row  d-flex justify-content-center">
            <Handler />
            <Days />
        </div>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return state
}

export default connect(mapStateToProps)(Main)