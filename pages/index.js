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
          <p>
            I am a Software/CV Engineer at{" "}
            <a style={{ color: "blue" }} href="https://www.hades.ai">
            Hades Technologies AG.
            </a>{" "}
            I was a graduate student at{" "}
            <a style={{ color: "blue" }} href="https://www.ethz.ch/en.html">
              ETH Zurich
            </a>{" "}
            majoring in Statistics with a focus on Machine learning. I recently
            worked on{" "}
            <a style={{ color: "blue" }} href="https://arxiv.org/abs/2103.14577">
              unsupervised domain adaptation
            </a>{" "}
            in <a style={{ color: "blue" }} href="https://vision.ee.ethz.ch/">Computer Vision Lab</a> with{" "}
            <a style={{ color: "blue" }} href="https://ee.ethz.ch/the-department/faculty/professors/person-detail.OTAyMzM=.TGlzdC80MTEsMTA1ODA0MjU5.html">
              Prof. Luc Van Gool
            </a>{" "}
            for my master thesis. I have interned at IBM Research and Goldman
            Sachs in the past. Previously, I earned a BS and an MS degree in
            Mathematics and Computing from{" "}
            <a style={{ color: "blue" }} href="https://www.iitk.ac.in/">IIT Kanpur</a> in India where I
            worked on Bayesian Analysis with{" "}
            <a style={{ color: "blue" }} href="https://scholar.google.co.in/citations?user=yq8z1rIAAAAJ&hl=en&oi=ao">
              Prof. Debasis Kundu
            </a>
            . You can also find me on{" "}
            <a style={{ color: "blue" }} href="https://www.linkedin.com/in/peshal-agarwal/">
              Linkedin
            </a> and{" "}
            <a style={{ color: "blue" }} href="https://scholar.google.co.in/citations?user=TD4121cAAAAJ&hl=en">
              Google Scholar
            </a>.
          </p>
          <div className={styles.main__introBtn}>
            {/* <Button
              className={styles.main__introBtn1}
              variant="outlined"
              href="../assets/pdf/resume.pdf"
              target="_blank"
              startIcon={<Avatar src="../assets/page.png"></Avatar>}
            >
              {" "}
              RESUME
            </Button> */}
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
          <img alt="background" src="../assets/peshal.png"></img>
        </div>
      </div>
    </>
  );
}
