import React, { useEffect, useState } from "react";
import "./projects.css";
import Cell from "./Cell";
import portfolioImg from "./resume.png";
import sudokuImg from "./sudoku.png";
import todoImg from "./todo.png";
import sortImg from "./sort.png";
import ticTacToeImg from "./tic-tac-toe.png";
import CatchMe from "./catch-me.png";
import WeatherApp from "./weather-app.png"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import useScreenSize from "../../utils/useScreenSize";

let projectData = [
  // {
  //   id: 0,
  //   name: "Portfolio",
  //   image: portfolioImg,
  //   url: "https://rashmisinha7.github.io/resume-app",
  // },
  {
    id: 0,
    name: "Weather App",
    image: WeatherApp,
    url: "https://rashmisinha7.github.io/proactive-weather",
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
    name: "Catch Me",
    image: CatchMe,
    url: "https://rashmisinha7.github.io/catch-me/",
  },
  {
    id: 5,
    name: "Sorting Visualizer",
    image: sortImg,
    url: "https://rashmeesinha7.github.io/Sorting-App/",
  },
];
function Projects(props) {
  const screenSize = useScreenSize();
  const [LeftIndex, setLeftIndex] = useState(0);
  const [RightIndex, setRightIndex] = useState(
    screenSize === "lg" ? 2 : screenSize === "md" ? 1 : 0
  );

  const onclickScrollUp = () => {
    clearTimeout(scrollAuto);
    if (LeftIndex > 0) {
      setLeftIndex(LeftIndex - 1);
      setRightIndex(RightIndex - 1);
    }
  };

  const onclickScrollDown = () => {
   clearTimeout(scrollAuto);
    if (RightIndex < projectData.length - 1) {
      setLeftIndex(LeftIndex + 1);
      setRightIndex(RightIndex + 1);
    }
  };
  // useEffect(() => {
  //   setRightIndex(screenSize === "lg" ? 2 : screenSize === "md" ? 1 : 0);
  // }, []);

  let scrollAuto;

  useEffect(() => {
    clearTimeout(scrollAuto);
    if (screenSize !== "md") {
      if (LeftIndex >= 0 && LeftIndex <= projectData.length - RightIndex) {
        scrollAuto = setTimeout(() => {
          onclickScrollDown();
        }, 3000);
      } else if(RightIndex === projectData.length - 1){
        scrollAuto = setTimeout(() => {
          setLeftIndex(0);
          setRightIndex(screenSize === "lg" ? 2 : screenSize === "md" ? 1 : 0);
        }, 3000);
      }
    }
  }, [LeftIndex, RightIndex]);

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
