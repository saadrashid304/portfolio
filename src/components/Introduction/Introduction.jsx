import styles from "./Introduction.module.css";
import circle from "../../assets/pattern-circle.svg";

const Introduction = () => {
  return (
    <div className={styles.intro_main_container}>
      <div className={styles.intro_content_container}>
        <h1>Nice to meet you!</h1>
        <h1>
          I'm <span>Saad Rashid</span>.
        </h1>
        <p className={styles.intro_desc}>
          Based in Pakistan, I'm a React.js developer passionate about building
          accessible web apps that users love.
        </p>
        <p
          className={styles.intro_btn}
          onClick={() => {
            const element = document.documentElement;
            element.scrollIntoView({ behavior: "smooth", block: "end" });
          }}
        >
          CONTACT ME
        </p>
      </div>
      <div className={styles.profile_pic} />
      <img src={circle} alt="" className={styles.circle_pic} />
    </div>
  );
};

export default Introduction;
