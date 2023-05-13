//educationForm.js
import React, { Component } from "react";
import uniqid from "uniqid";

class Educationform extends Component {
  constructor() {
    super();
    
    this.state = {
      edu: {
        School: '',
        Subject: '',
        StartDate: '',
        EndDate: '',
        Description: '',
        Id: '',
      },
    }
  }
  
  handleChange = (e) => {
  this.setState(prevState => ({
      edu: {
        School: prevState.edu.School,
        Subject: prevState.edu.Subject,
        StartDate: prevState.edu.StartDate,
        EndDate: prevState.edu.EndDate,
        Description: prevState.edu.Description,
        Id: uniqid(),
        [e.target.id] : e.target.value,
      },
    }));
  };
  
  pushEdu = (e) => {
    e.preventDefault();
    this.props.func(this.state.edu);
    console.log(this.state.edu);
  }
  
  render() {
    return (
      <div className="educationForm">
        <form id="education" onSubmit={this.pushEdu}>
          <label htmlFor="School">School:</label><br />
          <input type="text" id="School" onChange={this.handleChange} /><br />
          <label htmlFor="Subject">Area of Study:</label><br />
          <input type="text" id="Subject" onChange={this.handleChange} /><br />
          <label htmlFor="startDate2">Start Date:</label><br />
          <input type="date" id="StartDate" onChange={this.handleChange}/><br />
          <label htmlFor="EndDate">End Date:</label><br />
          <input type="date" id="EndDate" onChange={this.handleChange} /><br />
          <label htmlFor="Description">Description:</label><br />
          <input type="text" id="Description" /><br />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default Educationform;