import React from "react";
import {
  faGit,
  faHtml5,
  faJs,
  faCss3,
  faReact,
  faSass,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import mongoDbLogo from "../img/mongoDbNBBlack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <div className="skillsContainer" id="skills">
      <div className="description">
        <h3>My Skills</h3>
        <p>
          Along with my programming ability, I keep a positive attitude, work
          well with others, communicate well and thrive in stressful situations.
          I have built APIs for some of my projects using Express/Node and my
          preferred front end is React.
        </p>
      </div>
      <div className="skillsIcons">
        <div className="firstHalf">
          <div className="faContainer">
            <FontAwesomeIcon
              icon={faReact}
              className="faColor"
            ></FontAwesomeIcon>{" "}
            <div className="insideText">ReactJS</div>
          </div>
          <div className="faContainer">
            <FontAwesomeIcon
              icon={faSass}
              className="faColor"
            ></FontAwesomeIcon>{" "}
            <div className="insideText">SASS</div>
          </div>
          <div className="faContainer">
            <div className="imgContainer">
              <img
                src={mongoDbLogo}
                alt="mongoDb"
                style={{ maxHeight: "32px" }}
              />{" "}
            </div>
            <div className="insideText">MongoDB</div>
          </div>
          <div className="faContainer">
            <FontAwesomeIcon
              icon={faNode}
              className="faColor"
            ></FontAwesomeIcon>{" "}
            <div className="insideText">Node</div>
          </div>
        </div>
        <div className="secondHalf">
          <div className="faContainer">
            <FontAwesomeIcon icon={faJs} className="faColor"></FontAwesomeIcon>{" "}
            <div className="insideText">Javascript</div>
          </div>
          <div className="faContainer">
            <FontAwesomeIcon
              icon={faHtml5}
              className="faColor"
            ></FontAwesomeIcon>{" "}
            <div className="insideText">HTML5</div>
          </div>
          <div className="faContainer">
            <FontAwesomeIcon
              icon={faCss3}
              className="faColor"
            ></FontAwesomeIcon>{" "}
            <div className="insideText">CSS3</div>
          </div>
          <div className="faContainer">
            <FontAwesomeIcon icon={faGit} className="faColor"></FontAwesomeIcon>{" "}
            <div className="insideText">Git</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
