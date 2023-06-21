import { Fragment } from "react";
import styles from "./App.module.css";
import NameAndIcons from "./components/NameAndIcons/NameAndIcons";
import Introduction from "./components/Introduction/Introduction";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";
import TechnicalProjects from "./components/TechnicalProjects/TechnicalProjects";
import ContactForm from "./components/ContactForm/ContactForm";
import rings from "./assets/pattern-rings.svg";

const App = () => {
  return (
    <Fragment>
      <div className={styles.main_container}>
        <img src={rings} alt="" className={styles.rings} />
        <div className={styles.sub_container}>
          <NameAndIcons flag="top" />
          <Introduction />
          <hr className={styles.horizontal_line} />
          <TechnicalSkills />
          <hr className={styles.horizontal_lin2} />
          <TechnicalProjects />
        </div>
      </div>
      <div className={styles.contact_me_main_container}>
        <img src={rings} alt="" className={styles.rings1} />
        <div className={styles.contact_me_sub_container}>
          <ContactForm />
          <hr className={styles.horizontal_line1} />
          <NameAndIcons flag="bottom" />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
