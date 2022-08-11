import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import memoryGame from "../img/ProjectScreenshots/MemoryGame.png";
function MemoryGame() {
  let [activePhoto, setActivePhoto] = useState(1);

  let nextPhoto = () => {
    if (activePhoto === 4) {
      setActivePhoto(1);
    } else {
      setActivePhoto(activePhoto + 1);
    }
  };
  let prevPhoto = () => {
    if (activePhoto === 1) {
      setActivePhoto(4);
    } else {
      setActivePhoto(activePhoto - 1);
    }
  };
  return (
    <div className="memoryGame projectContainer">
      <div className="mainContent">
        <button
          className="screenshotButton btnAnimation screenshotLeft"
          onClick={prevPhoto}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="faColor"
          ></FontAwesomeIcon>
        </button>
        <div className="projImageContainer">
          <img src={memoryGame} alt="memory game" />
        </div>
        <button
          className="screenshotButton btnAnimation screenshotRight"
          onClick={nextPhoto}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="faColor"
          ></FontAwesomeIcon>
        </button>
      </div>
      <h3>Memory Game</h3>
      <div className="projectDescription">
        This is an older project, and it's quite simple. It is a Memory Game.
        You just have to click each of the pictures, but if you click the same
        one twice before clicking all of them your score will be reset. This
        project does not have a back end, and uses React. Not sure what I was
        thinking with that gradient background.
      </div>
      <div className="projectLinks">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://joey-red.github.io/memory-game/"
        >
          Live project link
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Joey-Red/memory-game"
        >
          Link to the Github repo
        </a>
      </div>
    </div>
  );
}

export default MemoryGame;
