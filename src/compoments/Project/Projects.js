import React from "react";
import "./projects.css";
import Cell from "./Cell";
import portfolioImg from "./resume.png";
import sudokuImg from "./sudoku.png";
import todoImg from "./todo.png";
import sortImg from "./sort.png";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <p align="center " id="projectHeader">
          Some of my Works
        </p>
        <div className="projectContainer">
          <div className="projects">
            <Cell
              projectName="Portfolio"
              projectImage={portfolioImg}
              projectUrl="https://github.com/rashmeesinha/resume-app"
            ></Cell>
            <Cell
              projectName="Sudoku Game"
              projectImage={sudokuImg}
              projectUrl="https://rashmeesinha.github.io/SUDOKU/"
            ></Cell>
          </div>
          <div className="projects">
            <Cell
              projectName="To Do List"
              projectImage={todoImg}
              projectUrl="https://rashmeesinha7.github.io/Todo-App/"
            ></Cell>
            <Cell
              projectName="Sorting Visualizer"
              projectImage={sortImg}
              projectUrl="https://rashmeesinha7.github.io/Sorting-App/"
            ></Cell>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
