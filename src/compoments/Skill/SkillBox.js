import "./skillBox.css";
import React from "react";


class SkillBox extends React.Component {
    render() {
    return (
        <div className="skillBox">
          <div className="skillName">
            <p align="center">{this.props.skillType}</p>
          </div>
          <div className="skillSet">
            <ul>
          <li>{this.props.skill1}</li>
          <li>{this.props.skill2}</li>
          <li>{this.props.skill3}</li>
            </ul>
          </div>
          <div className="skillImage">
          <img src={this.props.skillImg} alt={this.props.skillType} />
          </div>
        </div>
      );
    }
}
export default SkillBox;
