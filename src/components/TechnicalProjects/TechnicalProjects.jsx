import styles from "./TechnicalProjects.module.css";
import { projects } from "../../assets/data/projects";

const TechnicalProjects = () => {
  return (
    <div className={styles.projects_main_container}>
      <div className={styles.projects_header}>
        <h1>Projects</h1>
        <p className={styles.projects_contact_btn}>CONTACT ME</p>
      </div>
      <div className={styles.projects_list}>
        {projects.map((project) => (
          <div key={Math.random()} className={styles.projects_list_item}>
            <div className={styles.project_thumbnail}>
              <img src={project.thumbnail.large} alt="" />
              <div className={styles.projects_btn_group}>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className={`${styles.projects_contact_btn} ${styles.projects_view_btn}`}
                  >
                    VIEW PROJECT
                  </p>
                </a>
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className={`${styles.projects_contact_btn} ${styles.projects_code_btn}`}
                  >
                    VIEW CODE
                  </p>
                </a>
              </div>
            </div>
            <h2>{project.title}</h2>
            <div className={styles.projects_title_skills}>
              {project.skills.map((skill) => (
                <p
                  key={Math.random()}
                  className={skill !== "Html" && styles.skills_margin}
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalProjects;
