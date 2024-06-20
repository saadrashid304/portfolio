import { useEffect } from "react";
import { screenshots } from "../../assets/data/screenshots";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.projects_main_container}>
      <div className={styles.projects_header}>
        <h1>Lawful Interception</h1>
      </div>
      <div className={styles.projects_list}>
        {screenshots.map((screen) => (
          <div key={screen.id} className={styles.projects_list_item}>
            <img src={screen.image} alt={screen.name} />
            <h2>{screen.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
