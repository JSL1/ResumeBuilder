//workexperienceForm.js
import React, { Component } from "react";
import uniqid from "uniqid";

class Workxpform extends Component {
  constructor() {
    super();
    
    this.state = {
      job: {
        Company: '',
        Position: '',
        StartDate: '',
        EndDate: '',
        JobDescription: '',
        Id: '',
      },
    }
  }
  
  handleChange = (e) => {
    this.setState(prevState => ({
      job: {
        Company: prevState.job.Company,
        Position: prevState.job.Position,
        StartDate: prevState.job.StartDate,
        EndDate: prevState.job.EndDate,
        JobDescription: prevState.job.JobDescription,
        Id: uniqid(),
        [e.target.id] : e.target.value,
      },
    }));
  }
  
  logJob = () => {
    console.log(this.state.job);
  }
  
  pushJob = (e) => {
    e.preventDefault();
    this.props.func(this.state.job);
  }
  
  render() {
    const { job } = this.state;
    return (
      <div className="workXpForm">
        <form id="workExperience" onSubmit={this.pushJob}>
          <label htmlFor="Company">Company/Organization Name:</label><br />
          <input type="text" id="Company" value={job.Company} onChange={this.handleChange}/><br />
          <label htmlFor="Position">Position:</label><br />
          <input type="text" id="Position" value={job.Position} onChange={this.handleChange}/><br />
          <label htmlFor="StartDate">Start Date:</label><br />
          <input type="date" id="StartDate" value={job.StartDate} onChange={this.handleChange}/><br />
          <label htmlFor="EndDate">End Date:</label><br />
          <input type="date" id="EndDate"  value={job.EndDate}onChange={this.handleChange}/><br />
          <label htmlFor="JobDescription">Job Description:</label><br />
          <input type="text" id="JobDescription" value={job.JobDescription} onChange={this.handleChange}/><br />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default Workxpform;