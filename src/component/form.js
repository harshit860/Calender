import React, { Component } from 'react';
import './../form.css'

class FormComp extends Component {
  render() {
    return (
      <div className="box">
        <input placeholder="Title" className="titleform"></input>
        <textarea placeholder="Start Writing" spellCheck className="mainbody" p></textarea>
      </div>
    );
  }
}

export default FormComp;