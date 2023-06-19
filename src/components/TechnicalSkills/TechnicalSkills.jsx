import styles from "./TechnicalSkills.module.css";
import { userSkills } from "../../assets/data/userSkills";

const TechnicalSkills = () => {
  return (
    <div className={styles.skills_main_container}>
      {userSkills.map((skill) => (
        <div
          key={Math.random()}
          className={`${styles.skills_sub_container} ${skill.name === ""}`}
        >
          <h1>{skill.name}</h1>
          <p>{`${skill.experience} Year${
            skill.experience === 1 ? "" : "s"
          } Experience`}</p>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;
