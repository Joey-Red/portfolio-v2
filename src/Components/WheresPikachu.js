import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import WP1 from "../img/PjScreenshots2/WP1.png";
import WP2 from "../img/PjScreenshots2/WP2.png";
import WP3 from "../img/PjScreenshots2/WP3.png";

function WheresPikachu() {
  let [activePhoto, setActivePhoto] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPhoto();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activePhoto]);

  let nextPhoto = () => {
    if (activePhoto === 3) {
      setActivePhoto(1);
    } else {
      setActivePhoto(activePhoto + 1);
    }
  };
  let prevPhoto = () => {
    if (activePhoto === 1) {
      setActivePhoto(3);
    } else {
      setActivePhoto(activePhoto - 1);
    }
  };
  return (
    <div className="wheresPikachu projectContainer">
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
            <img src={WP1} alt="where's pikachu 1" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 2 ? (
          <div className="projImageContainer">
            <img src={WP2} alt="where's pikachu 2" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 3 ? (
          <div className="projImageContainer">
            <img src={WP3} alt="where's pikachu 3" />
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
        <h3>Where's Pikachu?!</h3>
        <div className="projectDescription">
          This project is an I spy game, where you get a list of Pokemon to
          find, you search for them and catch them. There are three different
          levels, it uses a React front end and Firebase to check coordinates
          you submit, works on any screen size.
        </div>
        <div className="projectLinks">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://joey-red.github.io/wheres-pikachu/"
          >
            Live project link
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joey-Red/wheres-pikachu"
          >
            Link to the Github repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default WheresPikachu;
