//experienceTab.js
import React, { Component } from "react";

class Experiencetab extends Component {
  
  deleteJob(job) {
    console.log(job);
    this.props.func(job);
  }
  
  render() {
    const { exp } = this.props;
    return (
      <div className="workExperience">
        {exp.map((job) => {
          return (
            <div className="jobTab">
            <button className="jobDelete" onClick={() => this.deleteJob(job.Id)}>X</button>
                <div className="jobTab-info">
                  <span className="company-name">{job.Company}</span>
                  <span className="job-start-end">{job.StartDate} to {job.EndDate}</span>
                </div>
                <span className="job-position">{job.Position}</span>
                <p className="job-description">{job.JobDescription}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Experiencetab;