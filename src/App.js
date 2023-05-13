import React, { Component } from "react";
import { Name, Email, Phone, Title, Location } from "./components/personalInfo";
import Description from "./components/description";
import Workxpform from "./components/workexperienceForm";
import Educationform from "./components/educationForm";
import Experiencetab from "./components/experienceTab";
import Educationtab from "./components/educationTab";
import Skillstab from "./components/skillsTab";
import SkillForm from "./components/skillForm";

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      info: {
        Name: '',
        Email: '',
        Phone: '',
        Title: '',
        Location: '',
        Description: '',
        Skills: ['html', 'css', 'jabaskripp', 'react', 'php', 'Unity/C#', 'Phaser.js', 'Photoshop'],
        Experience: [],
        Education: [],
      },
    }
  }
  
  handleChange = (e) => {
    this.setState(prevState => ({
      info: {
        Name: prevState.info.Name,
        Email: prevState.info.Email,
        Phone: prevState.info.Phone,
        Location: prevState.info.Location,
        Title: prevState.info.Title,
        Description: prevState.info.Description,
        Skills: prevState.info.Skills,
        Education: prevState.info.Education,
        Experience: prevState.info.Experience,
        [e.target.id] : e.target.value
      },
    }));
  };
  
  onSubmitSkill = (skill) => {
    let newArray = [...this.state.info.Skills];
    newArray.push(skill);
    this.setState(prevState => ({
      info: {
        Name: prevState.info.Name,
        Email: prevState.info.Email,
        Phone: prevState.info.Phone,
        Location: prevState.info.Location,
        Title: prevState.info.Title,
        Description: prevState.info.Description,
        Skills: newArray,
        Education: prevState.info.Education,
        Experience: prevState.info.Experience,
      }
    }));
  }
  
  onRemoveSkill = (skill) => {
    let newArray = [...this.state.info.Skills];
    let result = newArray.filter(s => s !== skill);
    this.setState(prevState => ({
      info: {
        Name: prevState.info.Name,
        Email: prevState.info.Email,
        Phone: prevState.info.Phone,
        Location: prevState.info.Location,
        Title: prevState.info.Title,
        Description: prevState.info.Description,
        Skills: result,
        Education: prevState.info.Education,
        Experience: prevState.info.Experience,
      },
    }))

  }
  
  onSubmitJob = (job) => {
    let newArray = [...this.state.info.Experience];
    newArray.push(job);
    this.setState(prevState => ({
      info: {
        Name: prevState.info.Name,
        Email: prevState.info.Email,
        Phone: prevState.info.Phone,
        Location: prevState.info.Location,
        Title: prevState.info.Title,
        Description: prevState.info.Description,
        Skills: prevState.info.Skills,
        Education: prevState.info.Education,
        Experience: newArray,
      },
    }));
  };
  
  onSubmitEdu = (edu) => {
    let newArray = [...this.state.info.Education];
    newArray.push(edu);
    this.setState(prevState => ({
      info: {
        Name: prevState.info.Name,
        Email: prevState.info.Email,
        Phone: prevState.info.Phone,
        Location: prevState.info.Location,
        Title: prevState.info.Title,
        Description: prevState.info.Description,
        Skills: prevState.info.Skills,
        Education: newArray,
        Experience: prevState.info.Experience,
      },
    }));
  };
  
  onRemoveJob = (job) => {
    let newArray = [...this.state.info.Experience];
    let result = newArray.filter(j => j.Id !== job);
    this.setState(prevState => ({
      info: {
        Name: prevState.info.Name,
        Email: prevState.info.Email,
        Phone: prevState.info.Phone,
        Location: prevState.info.Location,
        Title: prevState.info.Title,
        Description: prevState.info.Description,
        Skills: prevState.info.Skills,
        Education: prevState.info.Education,
        Experience: result,
      }
    }));
    console.log(this.state.info.Experience);
  };
  
  onRemoveEdu = (edu) => {
    let newArray = [...this.state.info.Education];
    let result = newArray.filter(e => e.Id !== edu);
    this.setState(prevState => ({
      info: {
        Name: prevState.info.Name,
        Email: prevState.info.Email,
        Phone: prevState.info.Phone,
        Location: prevState.info.Location,
        Title: prevState.info.Title,
        Description: prevState.info.Description,
        Education: result,
        Experience: prevState.info.Experience,
      },
    }));
    console.log('education id ' + edu);
  }
  
  
  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      Name: this.state.info.Name,
      Email: this.state.info.Email,
      Phone: this.state.info.Phone
    });
  }
  
  render() {
    const { info } = this.state;
    
    return (
      <div id="content">
        <div className="header">
          <h1>Resume Builder</h1>
        </div>
        <div className="main">
          <div className="mainLeft">
            <div className="infoForm">
              <form onSubmit={this.onSubmitInfo} id="infoForm">
                <label htmlFor="Name">Full Name:</label>
                <input
                  type="text"
                  id="Name"
                  onChange={this.handleChange}
                  value={info.Name}
                /><br />
                <label htmlFor="Email">Email Address:</label>
                <input
                  type="email"
                  id="Email"
                  onChange={this.handleChange}
                  value={info.Email}
                /><br />
                <label htmlFor="Phone">Phone:</label>
                <input
                  type="text"
                  id="Phone"
                  onChange={this.handleChange}
                  value={info.Phone}
                /><br />
                <label htmlFor="Title">Title:</label>
                <input
                  type="text"
                  id="Title"
                  onChange={this.handleChange}
                  value={info.Title}
                /><br />
                <label htmlFor="Location">Location:</label>
                <input
                  type="text"
                  id="Location"
                  onChange={this.handleChange}
                  value={info.Location}
                /><br />
                <label htmlFor="Description">Tell me about yourself...<br /></label>
                <textarea
                  form="infoForm"
                  id="Description"
                  rows="4"
                  cols="50"
                  onChange={this.handleChange}
                ></textarea>
                <br />
              </form>
            
            <SkillForm func={this.onSubmitSkill}/>
            
            </div>
            
            <div className="expForms">
              <h3>Add Education</h3>
              <Educationform func={this.onSubmitEdu}/>
              <h3>Add Work Experience</h3>
              <Workxpform func={this.onSubmitJob}/>
            </div>
          </div>
          
          <div className="mainRight">
            <Name text={info.Name}/>
            <Title text={info.Title} />
            <hr />
            <div className="personal-info">
              <Email text={info.Email}/>
              <Phone text={info.Phone}/>
              <Location text={info.Location} />
            </div>
            <hr />
            <span className="h3">My Skills </span>
            <Skillstab skills={info.Skills} func={this.onRemoveSkill} />
            <hr />
            <Description text={info.Description} />
            <hr />
            <span className="h3">Education </span>
            <Educationtab edu={info.Education} func={this.onRemoveEdu}/>
            <hr />
            <span className="h3">Work Experience </span>
            <Experiencetab exp={info.Experience} func={this.onRemoveJob}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
