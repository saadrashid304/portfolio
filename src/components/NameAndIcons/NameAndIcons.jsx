import styles from "./NameAndIcons.module.css";
import { useState } from "react";

import github from "../../assets/github.png";
import mentor from "../../assets/mentor.png";
import linkedin from "../../assets/linkedin.png";
import fiverr from "../../assets/fiverr.png";
import githubS from "../../assets/githubS.png";
import mentorS from "../../assets/mentorS.png";
import linkedinS from "../../assets/linkedinS.png";
import fiverrS from "../../assets/fiverrS.png";

const NameAndIcons = ({ flag }) => {
  const [hover, setHover] = useState(null);

  const onFMouseOver = () => {
    setHover("G");
  };

  const onYMouseOver = () => {
    setHover("M");
  };

  const onTMouseOver = () => {
    setHover("L");
  };

  const onPMouseOver = () => {
    setHover("F");
  };

  const onMouseLeave = () => {
    setHover(null);
  };

  return (
    <div
      className={`${styles.name_icons_main_container} ${
        flag === "bottom" ? styles.margin_bottom : ""
      }`}
    >
      <p>saadrashid</p>
      <div
        className={`${styles.icon_container} ${
          flag === "bottom" ? styles.no_margin : ""
        }`}
      >
        <a
          href="https://github.com/saadrashid304"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hover === "G" ? githubS : github}
            alt=""
            onMouseOver={onFMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/saadrashid304"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hover === "M" ? mentorS : mentor}
            alt=""
            onMouseOver={onYMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/saad-rashid-03a46021b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hover === "L" ? linkedinS : linkedin}
            alt=""
            onMouseOver={onTMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </a>
        <a
          href="https://www.fiverr.com/saadrashid304"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hover === "F" ? fiverrS : fiverr}
            alt=""
            onMouseOver={onPMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </a>
      </div>
    </div>
  );
};

export default NameAndIcons;
