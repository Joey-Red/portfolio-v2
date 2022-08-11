import React from "react";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  let toggleSocials = () => {
    let hiddenLinks = document.getElementById("linksContainer");
    hiddenLinks.classList.toggle("hidden");
  };

  return (
    <nav className="appNav" id="top">
      <div className="appNavInside">
        <div className="navLinkContainer">
          <a href="#skills" className="navLink">
            Skills
          </a>
          <a href="#projects" className="navLink">
            My Projects
          </a>
          <a href="#about" className="navLink">
            About
          </a>
        </div>
        <button onClick={toggleSocials} className="toggleSocials btnAnimation">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <div className="links hidden" id="linksContainer">
          <a
            className="btnAnimation"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joey-Red"
          >
            <div className="gitLink">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </div>
          </a>{" "}
          <a
            className="btnAnimation"
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/JoeyDalrymple_"
          >
            <div className="twitLink">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>{" "}
          </a>
          <a
            className="btnAnimation"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/joey-dalrymple-060809228/"
          >
            <div className="linkedIn">
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
