import React, { Component } from 'react'
import FormComp from './form'
import Navbar from './Navbar'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  change = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  getInfo = (val) =>{
    console.log(val)
  }
  render() {
    return (
      <div >
        <Navbar />
        {this.state.clicked ? (
          <div style={{ marginTop: '30px', justifyContent: "center", display: "flex" }}>
            <FormComp getInfo={this.getInfo} handle={this.change} />
          </div>
        ) : (
            <div style={{ marginTop: '30px', justifyContent: "center", display: "flex" }}>
              <input onClick={() => this.change()} placeholder="Note it down"></input>
            </div>
          )}
      </div>
    )
  }
}
