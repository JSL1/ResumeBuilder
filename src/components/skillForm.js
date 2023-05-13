//skillsForm.js
import React, { Component } from "react";

class SkillForm extends Component {
  constructor() {
    super();
    
    this.state = {
      text: '',
    }
  }
  
  pushSkill = (e) => {
    e.preventDefault();
    console.log('skill: ' + this.state.text + ' added.');
    this.props.func(this.state.text);
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }
  
  render() {
    return (
      <div className="skills-form">
          <form onSubmit={this.pushSkill}>
          <label htmlFor="MySkill">
            <h3>Add Skills</h3>
          </label>
          <p className="small">Add one skill at a time and press enter or "Add Skill"</p>
          <input type="text" id="MySkill" onChange={this.handleChange}/>
          <button type="submit">Add Skill</button>
        </form>
      </div>
    )
  }

}

export default SkillForm;