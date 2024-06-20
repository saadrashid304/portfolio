import styles from "./TechnicalProjects.module.css";
import { projects } from "../../assets/data/projects";
import { useNavigate } from "react-router-dom";

const TechnicalProjects = () => {

  const navigate = useNavigate();

  const viewScreenshotsClickHandler = () => {
    navigate("/projectDetails");
  };

  return (
    <div className={styles.projects_main_container}>
      <div className={styles.projects_header}>
        <h1>Projects</h1>
        <p
          className={styles.projects_contact_btn}
          onClick={() => {
            const element = document.documentElement;
            element.scrollIntoView({ behavior: "smooth", block: "end" });
          }}
        >
          CONTACT ME
        </p>
      </div>
      <div className={styles.projects_list}>
        {projects.map((project) => (
          <div key={Math.random()} className={styles.projects_list_item}>
            <div className={styles.project_thumbnail}>
              <img src={project.thumbnail.large} alt="" />
              <div className={styles.projects_btn_group}>
                {project.projectUrl !== "" ? (
                  <>
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
                  </>
                ) : (
                  <p
                    className={`${styles.projects_contact_btn} ${styles.projects_view_screen_btn}`}
                    onClick={viewScreenshotsClickHandler}
                  >
                    VIEW PROJECT SCREENSHOTS
                  </p>
                )}
              </div>
            </div>
            <h2>{project.title}</h2>
            <div className={styles.projects_title_skills}>
              {project.skills.map((skill) => (
                <p
                  key={Math.random()}
                  className={skill !== "Html" ? styles.skills_margin : ""}
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
