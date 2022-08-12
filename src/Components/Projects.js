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

function Projects() {
  let [activeProject, setActiveProject] = useState(1);

  document.addEventListener("keydown", logKey);
  function logKey(e) {
    document.removeEventListener("keydown", logKey);
    if (e.code !== "ArrowRight" && e.code !== "ArrowLeft") {
      return;
    } else if (`${e.code}` === "ArrowRight") {
      nextProject();
    } else if (`${e.code}` === "ArrowLeft") {
      prevProject();
    }
  }

  function projectSwitch(activeProject) {
    switch (activeProject) {
      case 1:
        return <BlogApi />;
      case 2:
        return <WheresPikachu />;
      case 3:
        return <RedditProject />;
      case 4:
        return <MembersOnly />;
      case 5:
        return <MemoryGame />;
      default:
        return <BlogApi />;
    }
  }

  let nextProject = useCallback(() => {
    if (activeProject === 5) {
      setActiveProject(1);
    } else {
      setActiveProject(activeProject + 1);
    }
    // }
  }, [activeProject]);

  let prevProject = useCallback(() => {
    if (activeProject === 1) {
      setActiveProject(5);
    } else {
      setActiveProject(activeProject - 1);
    }
  }, [activeProject]);

  return (
    <div className="projectPageContainer">
      <div className="projectsHeader">
        <h1 id="projects">My Projects</h1>
        <p>
          All of these projects are currently live. Under the description is a
          link, if you'd like to get a better look.
        </p>
        <p className="mobileBar">
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>You can use your
          arrow keys to scroll through my projects!
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </p>
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
