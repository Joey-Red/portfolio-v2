import React from "react";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutContainerInside">
          <a href="#top" className="toTop btnAnimation">
            <FontAwesomeIcon icon={faAnglesUp}></FontAwesomeIcon>
          </a>
          <h1 className="aboutMeHeader" id="about">
            About me{" "}
          </h1>

          <div className="aboutMeBody">
            I am a web developer located in Kansas, USA preferring the front end
            side of things, but I do back end as well. I enjoy complex problem
            solving, making cool things, staying fit, and playing with my dogs.
            I have a positive attitude and am good at handling stress and
            anxiety. I am looking forward to picking up new tools and languages.
            <div>
              I am 26 years old, and I've been working retail for nearly 10
              years, I had to make a change. I had to learn a skill, and even
              though I've used Python, C++ and a little Java before, when I
              found JavaScript I knew it was the right primary language for me.
            </div>{" "}
            A few months into learning, I decided to focus all of my free time
            and effort on web development. I switched solely to a Linux boot,
            deleted all of my video games and have been working hard and I will
            continue to do so every day.
          </div>
          <div className="goodbye">
            Thank you for visiting my page. If you would like to contact me,
            email me at <span>joeyedalrymple@gmail.com</span>
          </div>
          <div className="mySocials">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Joey-Red"
            >
              <div className="gitLink">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> My GitHub
              </div>
            </a>{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/JoeyDalrymple_"
            >
              <div className="twitLink">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                My Twitter
              </div>{" "}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/joey-dalrymple-060809228/"
            >
              <div className="linkedIn">
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                My LinkedIn
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
