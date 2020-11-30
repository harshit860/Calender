import React, { Component } from 'react';
import './../form.css'

class FormComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      main: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  sendinfo = () => {
    let obj = {title:this.state.title,main:this.state.main}
    this.props.getInfo(obj)
  }
  render() {
    console.log(this.state)
    return (
      <div className="box">
        <div style={{ display: "flex", flexDirection: "row-reverse" , paddng:5}}>
          <button onClick={()=>this.props.handle()} style={{ backgroundColor: "red", border: 'none', borderRadius: 10, color: "white", display: "flex", position: "fixed" }}>Close</button>
        </div>
        <input placeholder="Title" name="title" onChange={this.onChange} className="titleform"></input>
        <textarea placeholder="Start Writing" name="main" onChange={this.onChange} className="mainbody" ></textarea>
        <button onClick={()=>this.sendinfo()} className="save">Save</button>
      </div>
    );
  }
}

export default FormComp;