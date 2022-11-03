import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer--container">
      <FontAwesomeIcon className="footer--icon" icon={faFacebookSquare} />
      <FontAwesomeIcon className="footer--icon" icon={faInstagramSquare} />
      <FontAwesomeIcon className="footer--icon" icon={faGithubSquare} />
      <FontAwesomeIcon className="footer--icon" icon={faLinkedin} />
    </div>
  );
}

export default Footer;
