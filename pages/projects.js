import Data from "../data/data-projects";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import styles from "../styles/Projects.module.css";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Peshal Agarwal ETH Zurich</title>
      </Head>
      <div className={styles.projects}>
        {Data.map((d) => (
          <div className={styles.card} key={d.title}>
            <h4>{d.title}</h4>
            <img src={d.image} alt={d.title}></img>
            <p>{d.summary}</p>
            <div className={styles.project__btn}>
              {d.report !== "none" ? (
                <Button
                  startIcon={<Avatar src="../assets/page.png"></Avatar>}
                  variant="outlined"
                  href=""
                  target="_blank"
                >
                  Report
                </Button>
              ) : null}
              {d.github !== "none" ? (
                <Button
                  startIcon={<Avatar src="../assets/github-logo.png"></Avatar>}
                  variant="outlined"
                  href=""
                  target="_blank"
                >
                  GITHUB
                </Button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
