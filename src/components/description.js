//description.js
import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="description">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Description;