import "./cell.css";

import React from "react";

class Cell extends React.Component {
  render() {
    return (
      <div className="cell">
        <div className="projectName">
          <p align="center">{this.props.projectName}</p>
        </div>
        <div className="projectSymbol">
          <img src={this.props.projectImage} alt="Image"></img>
        </div>
        <div className="projectLink">
          <a href={this.props.projectUrl} target="_blank">
            <button>Link to {this.props.projectName}</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Cell;
