import styles from "./App.module.css";
import NameAndIcons from "./components/NameAndIcons/NameAndIcons";
import Introduction from "./components/Introduction/Introduction";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";
import TechnicalProjects from "./components/TechnicalProjects/TechnicalProjects";
import rings from "./assets/pattern-rings.svg";

const App = () => {
  return (
    <div className={styles.main_container}>
      <img src={rings} alt="" className={styles.rings} />
      <div className={styles.sub_container}>
        <NameAndIcons />
        <Introduction />
        <hr className={styles.horizontal_line} />
        <TechnicalSkills />
        <TechnicalProjects />
      </div>
    </div>
  );
};

export default App;
