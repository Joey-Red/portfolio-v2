import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import blogApi1 from "../img/PjScreenshots2/Blog1.png";
import blogApi2 from "../img/PjScreenshots2/Blog2.png";
import blogApi3 from "../img/PjScreenshots2/Blog3.png";
import blogApi4 from "../img/PjScreenshots2/Blog4.png";
import blogApi5 from "../img/PjScreenshots2/Blog5.png";

function BlogApi() {
  let [activePhoto, setActivePhoto] = useState(1);

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
    <div className="blogApi projectContainer">
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
            <img src={blogApi1} alt="blogApi 1" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 2 ? (
          <div className="projImageContainer">
            <img src={blogApi2} alt="blogApi 2" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 3 ? (
          <div className="projImageContainer">
            <img src={blogApi3} alt="blogApi 3" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 4 ? (
          <div className="projImageContainer">
            <img src={blogApi4} alt="blogApi 4" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 5 ? (
          <div className="projImageContainer">
            <img src={blogApi5} alt="blogApi 5" />
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
        <h3>blogApi</h3>
        <div className="projectDescription">
          This project is a blog using the MERN stack. Where you can create
          posts, comment, edit, delete etc. It uses a monorepo where the React
          front end and Node/Express backend are hosted on heroku. This project
          uses MongoDB for the database.
        </div>
        <div className="projectLinks">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://fish-blog-api-client.herokuapp.com/"
          >
            Live project link
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joey-Red/blogApi"
          >
            Link to the Github repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogApi;
