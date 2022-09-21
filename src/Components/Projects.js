import React, { useState, useEffect, useCallback } from "react";
import MembersOnly from "./MembersOnly";
import RedditProject from "./RedditProject";
import BlogApi from "./BlogApi";
import MemoryGame from "./MemoryGame";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import WheresPikachu from "./WheresPikachu";
import MusicWithFriends from "./MusicWithFriends";

function Projects() {
  let [activeProject, setActiveProject] = useState(0);

  // document.addEventListener("keydown", logKey);
  // function logKey(e) {
  //   document.addEventListener("keydown", logKey);

  //   document.removeEventListener("keydown", logKey);
  //   if (e.code !== "ArrowRight" && e.code !== "ArrowLeft") {
  //     return;
  //   } else if (`${e.code}` === "ArrowRight") {
  //     nextProject(activeProject);
  //   } else if (`${e.code}` === "ArrowLeft") {
  //     prevProject(activeProject);
  //   }
  // }

  // function projectSwitch(activeProject) {
  //   switch (activeProject) {
  //     case 0:
  //       return <BlogApi />;
  //     case 1:
  //       return <MemoryGame />;
  //     case 2:
  //       return <WheresPikachu />;
  //     case 3:
  //       return <RedditProject />;
  //     case 4:
  //       return <MembersOnly />;
  //     case 5:
  //       return <MusicWithFriends />;
  //     // default:
  //     //   return <BlogApi />;
  //   }
  // }
  function projectSwitch(activeProject) {
    if (activeProject === 0) {
      return <BlogApi />;
    }
    if (activeProject === 1) {
      return <MemoryGame />;
    }
    if (activeProject === 2) {
      return <WheresPikachu />;
    }
    if (activeProject === 3) {
      return <RedditProject />;
    }
    if (activeProject === 4) {
      return <MembersOnly />;
    }
    if (activeProject === 5) {
      return <MusicWithFriends />;
    } else {
      let randomProj = Math.floor(Math.random() * 6) + 1;
      setActiveProject(randomProj);
      // return <BlogApi />;
    }
  }

  let newCount = activeProject;
  let nextProject = () => {
    newCount = activeProject + 1;
    if (newCount === 6) {
      setActiveProject(0);
    } else {
      setActiveProject(newCount);
    }
  };
  let prevProject = () => {
    newCount = activeProject - 1;
    if (newCount === -1) {
      setActiveProject(6);
      newCount = 6;
    } else {
      setActiveProject(newCount);
    }
  };

  return (
    <div className="projectPageContainer">
      <div className="projectsHeader">
        <h1 id="projects">My Projects</h1>
        <p>
          All of these projects are currently live. Under the description is a
          link, if you'd like to get a better look.
        </p>
        {/* <p className="mobileBar">
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>You can use your
          arrow keys to scroll through my projects!
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </p> */}
      </div>
      <div className="projectsContainer">
        <div id="activeProject">
          <button
            className="projectNav btnAnimation"
            id="leftButton"
            onClick={prevProject}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
          </button>
          {projectSwitch(activeProject)}
          <button
            id="rightButton"
            className="projectNav btnAnimation"
            onClick={nextProject}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
