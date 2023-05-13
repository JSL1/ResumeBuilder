//skillsTab.js
import React, { Component } from "react";

class Skillstab extends Component {
  
  deleteSkill(skill) {
    console.log(skill)
    this.props.func(skill);
  }
  
  render() {
    const { skills } = this.props;
    return (
      <div className="skills-tab">
        <div className="my-skills">
          {skills.map((skill) =>  {
            return (
              <div>
                <li>{skill}</li>
                <button className="jobDelete small" onClick={() => this.deleteSkill(skill)}>X</button>
              </div>
            )})
          }
        </div>
      </div>
    );
  }
}

export default Skillstab;