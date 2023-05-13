//personalInfo.js - the users personal information
import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <span className="full-name-text">{this.props.text}</span>
    )
  }
}

class Email extends Component {
  render() {
    return (
      <span className="email-text">{this.props.text}</span>
    )
  }
}

class Phone extends Component {
  render() {
    return (
      <span className="phone-text">{this.props.text}</span>
    )
  }
}

class Title extends Component {
  render() {
    return (
      <span className="title-text">{this.props.text}</span>
    )
  }
}

class Location extends Component {
  render() {
    return (
      <span className="location-text">{this.props.text}</span>
    )
  }
}

export {
  Name,
  Email,
  Phone,
  Title,
  Location
};