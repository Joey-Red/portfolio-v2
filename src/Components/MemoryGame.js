import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FEP1 from "../img/PjScreenshots2/FEP1.png";
import FEP2 from "../img/PjScreenshots2/FEP2.png";
import FEP3 from "../img/PjScreenshots2/FEP3.png";
import FEP4 from "../img/PjScreenshots2/FEP4.png";

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
          className="screenshotButton screenshotLeft none"
          onClick={prevPhoto}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="faColor"
          ></FontAwesomeIcon>
        </button>
        {activePhoto === 1 ? (
          <div className="projImageContainer">
            <img src={FEP1} alt="Free Event Planner 1" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 2 ? (
          <div className="projImageContainer">
            <img src={FEP2} alt="Free Event Planner 2" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 3 ? (
          <div className="projImageContainer">
            <img src={FEP3} alt="Free Event Planner 3" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 4 ? (
          <div className="projImageContainer">
            <img src={FEP4} alt="Free Event Planner 4" />
          </div>
        ) : (
          <></>
        )}
        <button
          className="screenshotButton screenshotRight none"
          onClick={nextPhoto}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="faColor"
          ></FontAwesomeIcon>
        </button>
      </div>

      <div className="descrContainer">
        <h3>Free Event Planner</h3>
        <div className="projectDescription">
          This project is a blog using the MERN stack. Where you can create
          events, where you will be provided a link to send to other people. It
          also lists public events for anyone to join! It uses a monorepo where
          the React front end is hosted on Github Pages, the Node/Express
          backend are hosted on heroku. This project uses MongoDB for the
          database.
        </div>
        <div className="projectLinks">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://joey-red.github.io/EventPlanner/"
          >
            Live project link
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joey-Red/EventPlanner"
          >
            Link to the Github repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;
