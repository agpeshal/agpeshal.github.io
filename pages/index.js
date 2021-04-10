import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Peshal Agarwal ETH Zurich </title>
      </Head>
      <div className={styles.main}>
        <div className={styles.main__intro}>
          <h1>Hi There</h1>
          <h4>
            I'm Peshal Agarwal, an aspiring Machine Learning Engineer. I am
            graduate student at ETH Zurich majoring in Statistics.
          </h4>
          <div className={styles.main__introBtn}>
            <Button
              className={styles.main__introBtn1}
              variant="outlined"
              href="../assets/pdf/resume.pdf"
              target="_blank"
              startIcon={<Avatar src="../assets/page.png"></Avatar>}
            >
              {" "}
              RESUME
            </Button>
            <Button
              href="https://github.com/agpeshal"
              target="_blank"
              variant="outlined"
              className={styles.main__introBtn - 2}
              startIcon={<Avatar src="../assets/github-logo.png"></Avatar>}
            >
              {" "}
              GITHUB
            </Button>
          </div>
        </div>
        <div className={styles.main__image}>
          <img alt="background" src="../assets/peshal_final.png"></img>
        </div>
      </div>
    </>
  );
}
