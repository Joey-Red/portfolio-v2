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
    let socialsButton = document.getElementById("toggleSocials");
    let ghLink = document.getElementById("ghLink");
    let twLink = document.getElementById("twLink");
    let liLink = document.getElementById("liLink");
    if (socialsButton.classList.contains("reverseTurn")) {
      socialsButton.classList.toggle("reverseTurn");
      socialsButton.classList.toggle("turnButton");
    } else if (socialsButton.classList.contains("turnButton")) {
      socialsButton.classList.toggle("turnButton");
      socialsButton.classList.toggle("reverseTurn");
    } else if (
      !socialsButton.classList.contains("reverseTurn") ||
      !socialsButton.classList.contains("turnButton")
    ) {
      socialsButton.classList.toggle("turnButton");
    }
    setTimeout(() => {
      ghLink.classList.toggle("hidden");
    }, 1270);
    setTimeout(() => {
      twLink.classList.toggle("hidden");
    }, 1170);
    setTimeout(() => {
      liLink.classList.toggle("hidden");
    }, 1070);
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
        <button
          onClick={toggleSocials}
          className="toggleSocials btnAnimation"
          id="toggleSocials"
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <div className="links" id="linksContainer">
          <a
            id="ghLink"
            className="btnAnimation hidden"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Joey-Red"
          >
            <div className="gitLink">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </div>
          </a>{" "}
          <a
            id="twLink"
            className="btnAnimation hidden"
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/JoeyDalrymple_"
          >
            <div className="twitLink">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>{" "}
          </a>
          <a
            id="liLink"
            className="btnAnimation hidden"
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
