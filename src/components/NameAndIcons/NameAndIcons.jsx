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

const NameAndIcons = () => {
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
    <div className={styles.name_icons_main_container}>
      <p>saadrashid</p>
      <div className={styles.icon_container}>
        <img
          src={hover === "G" ? githubS : github}
          alt=""
          onMouseOver={onFMouseOver}
          onMouseLeave={onMouseLeave}
        />
        <img
          src={hover === "M" ? mentorS : mentor}
          alt=""
          onMouseOver={onYMouseOver}
          onMouseLeave={onMouseLeave}
        />
        <img
          src={hover === "L" ? linkedinS : linkedin}
          alt=""
          onMouseOver={onTMouseOver}
          onMouseLeave={onMouseLeave}
        />
        <img
          src={hover === "F" ? fiverrS : fiverr}
          alt=""
          onMouseOver={onPMouseOver}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </div>
  );
};

export default NameAndIcons;
