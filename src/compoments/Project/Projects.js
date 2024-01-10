import React, { useState } from "react";
import "./projects.css";
import Cell from "./Cell";
import portfolioImg from "./resume.png";
import sudokuImg from "./sudoku.png";
import todoImg from "./todo.png";
import sortImg from "./sort.png";
import ticTacToeImg from './tic-tac-toe.png'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

let projectData = [
  {
    id: 0,
    name: "Portfolio",
    image: portfolioImg,
    url: "https://rashmisinha7.github.io/resume-app",
  },
  {
    id: 1,
    name: "Sudoku Game",
    image: sudokuImg,
    url: "https://rashmisinha7.github.io/SUDOKU/",
  },
  {
    id: 2,
    name: "To Do List",
    image: todoImg,
    url: "https://rashmisinha7.github.io/assignment2-rashmi-todo/",
  },
  {
    id: 3,
    name: "Tic-Tac-Toe Game",
    image: ticTacToeImg,
    url: "https://rashmisinha7.github.io/tic-tac-toe/",
  },
  {
    id: 4,
    name: "Sorting Visualizer",
    image: sortImg,
    url: "https://rashmeesinha7.github.io/Sorting-App/",
  },
];
function Projects(props) {
  const [LeftIndex, setLeftIndex] = useState(0);
  const [RightIndex, setRightIndex] = useState(2);

  const onclickScrollUp = () => {
    if (LeftIndex > 0) {
      setLeftIndex(LeftIndex - 1);
      setRightIndex(RightIndex - 1);
    }
  };

  const onclickScrollDown = () => {
    if (RightIndex < projectData.length - 1) {
      setRightIndex(RightIndex + 1);
      setLeftIndex(LeftIndex + 1);
    }
  };

  if (LeftIndex == 0) {
  }

  return (
    <div>
      <p align="center " id="projectHeader">
        Some of my Works
      </p>
      <div className="projectContainer">
        {LeftIndex != 0 ? (
          <div className="carouselButton" onClick={onclickScrollUp}>
            <KeyboardArrowLeftIcon />
          </div>
        ) : (
          <div className="disabledCarousalButton"></div>
        )}
        <div className="projects">
          {projectData.map((item) => {
            return item.id >= LeftIndex && item.id <= RightIndex ? (
              <Cell
                key={item.id}
                projectName={item.name}
                projectImage={item.image}
                projectUrl={item.url}
              ></Cell>
            ) : null;
          })}
        </div>
        {RightIndex != projectData.length - 1 ? (
          <div className={"carouselButton"} onClick={onclickScrollDown}>
            <KeyboardArrowRightIcon />
          </div>
        ) : (
          <div className="disabledCarousalButton"></div>
        )}
      </div>
    </div>
  );
}

export default Projects;
