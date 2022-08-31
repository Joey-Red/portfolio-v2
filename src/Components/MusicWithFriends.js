import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import MWF1 from "../img/PjScreenshots2/MWF1.png";
import MWF2 from "../img/PjScreenshots2/MWF2.png";
import MWF3 from "../img/PjScreenshots2/MWF3.png";
import MWF4 from "../img/PjScreenshots2/MWF4.png";
import MWF5 from "../img/PjScreenshots2/MWF5.png";
import MWF6 from "../img/PjScreenshots2/MWF6.png";

function MusicWithFriends() {
  let [activePhoto, setActivePhoto] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPhoto();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activePhoto]);

  let nextPhoto = () => {
    if (activePhoto === 5) {
      setActivePhoto(1);
    } else {
      setActivePhoto(activePhoto + 1);
    }
  };
  let prevPhoto = () => {
    if (activePhoto === 1) {
      setActivePhoto(5);
    } else {
      setActivePhoto(activePhoto - 1);
    }
  };
  return (
    <div className="MWF projectContainer">
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
        {activePhoto === 1 ? (
          <div className="projImageContainer">
            <img src={MWF1} alt="MWF 1" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 2 ? (
          <div className="projImageContainer">
            <img src={MWF2} alt="MWF 2" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 3 ? (
          <div className="projImageContainer">
            <img src={MWF3} alt="MWF 3" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 4 ? (
          <div className="projImageContainer">
            <img src={MWF4} alt="MWF 4" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 5 ? (
          <div className="projImageContainer">
            <img src={MWF5} alt="MWF 5" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 6 ? (
          <div className="projImageContainer">
            <img src={MWF6} alt="MWF 6" />
          </div>
        ) : (
          <></>
        )}
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

      <div className="descrContainer">
        <h3>Music With Friends!</h3>
        <div className="projectDescription">
          This project is a website to watch videos, listen to music and chat
          with people using React, JS, SASS, Node and SocketIO.
        </div>
        <div className="projectLinks">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://joey-red.github.io/music-with-friends-front-end/"
          >
            Live project link
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joey-Red/music-with-friends-front-end"
          >
            Link to the Github repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default MusicWithFriends;
