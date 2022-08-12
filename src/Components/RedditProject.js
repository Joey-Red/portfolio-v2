import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import reddit1 from "../img/PjScreenshots2/Reddit1.png";
import reddit2 from "../img/PjScreenshots2/Reddit2.png";
import reddit3 from "../img/PjScreenshots2/Reddit3.png";
import reddit4 from "../img/PjScreenshots2/Reddit4.png";
import reddit5 from "../img/PjScreenshots2/Reddit5.png";

function RedditProject() {
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
    <div className="redditProject projectContainer">
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
            <img src={reddit1} alt="reddit 1" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 2 ? (
          <div className="projImageContainer">
            <img src={reddit2} alt="reddit 2" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 3 ? (
          <div className="projImageContainer">
            <img src={reddit3} alt="reddit 3" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 4 ? (
          <div className="projImageContainer">
            <img src={reddit4} alt="reddit 4" />
          </div>
        ) : (
          <></>
        )}
        {activePhoto === 5 ? (
          <div className="projImageContainer">
            <img src={reddit5} alt="reddit 5" />
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
        <h3>Reddit Clone</h3>
        <div className="projectDescription">
          This is my Reddit (clone), you can create posts and subreddits. You
          can upvote and downvote posts. Usernames and Subreddit links are
          dynamic, they will take you to posts created in that subreddit and
          posts created by that user. React frontend, Firebase back end.
        </div>
        <div className="projectLinks">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://joey-red.github.io/website-clone/"
          >
            Live project link
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joey-Red/website-clone"
          >
            Link to the Github repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default RedditProject;
