import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import membersOnly1 from "../img/ProjectScreenshots/membersOnly1.png";
import membersOnly2 from "../img/ProjectScreenshots/membersOnly2.png";

function MembersOnly() {
  let [activePhoto, setActivePhoto] = useState(1);

  let nextPhoto = () => {
    if (activePhoto === 1) {
      setActivePhoto(2);
    }
    if (activePhoto === 2) {
      setActivePhoto(1);
    }
  };
  let prevPhoto = () => {
    if (activePhoto === 2) {
      setActivePhoto(1);
    }
    if (activePhoto === 1) {
      setActivePhoto(2);
    }
  };
  return (
    <div className="membersOnly projectContainer">
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
        <button
          className="screenshotButton btnAnimation screenshotRight"
          onClick={nextPhoto}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="faColor"
          ></FontAwesomeIcon>
        </button>
        {activePhoto === 1 ? (
          <>
            <img src={membersOnly1} alt="members only 1" />
          </>
        ) : (
          <></>
        )}
        {activePhoto === 2 ? (
          <>
            <img src={membersOnly2} alt="members only 2" />
          </>
        ) : (
          <></>
        )}
      </div>
      <h3>Members Only</h3>
      <div className="projectDescription">
        This project is somewhere you can sign up and post stories. Anyone can
        post here, but the only way You can see the name of someone who posted a
        story, is if you guess the secret word. (its bicycle). This project also
        uses a Node/Express back end and an Ejs front end.
      </div>
      <div className="projectLinks">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://members-only-fish.herokuapp.com/"
        >
          Live project link
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Joey-Red/members-only"
        >
          Link to the Github repo
        </a>
      </div>
    </div>
  );
}

export default MembersOnly;
