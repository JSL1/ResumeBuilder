//educationTab.js
import React, { Component } from "react";

class Educationtab extends Component {
  
  deleteEdu(edu) {
    console.log('button clicked');
    this.props.func(edu);
  }
  
  render() {
    const { edu } = this.props;
    return (
      <div className="EducationE">
        {edu.map((ed) => {
          return (
            <div className="schoolTab">
              <button className="jobDelete" onClick={() => this.deleteEdu(ed.Id)}>X</button>
              <div className="school-info">
                <span className="school-name">{ed.School}</span>
                <span className="school-start-end">{ed.StartDate} to {ed.EndDate}</span>
              </div>
              <span className="school-subject">{ed.Subject}</span>
              {ed.Description}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Educationtab;