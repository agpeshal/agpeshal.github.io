import styles from "../styles/Internships.module.css";
import Head from "next/head";

const Internships = () => {
  return (
    <>
      <Head>
        <title>Internships | Peshal Agarwal ETH Zurich</title>
      </Head>
      <div className={styles.experiences}>
        <div className={styles.timeline}>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <h2>IBM Research Zurich</h2>
              <div className={styles.content__div}>
                <img src="../assets/ibm_zurich_board.jpeg" alt=""></img>
                <p>
                  Experimented with state-of-the-art end-to-end differential
                  ensemble architectures and, compared and contrasted them with
                  Gradient Boosted Decision Trees. Our work led to a{" "}
                  <a
                    href="https://proceedings.neurips.cc/paper/2020/file/7fd3b80fb1884e2927df46a7139bb8bf-Paper.pdf"
                    target="_blank"
                  >
                    publication
                  </a>{" "}
                  at
                  <b> NeurIPS</b>.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <h2>Goldman Sachs</h2>
              <div className={styles.content__div}>
                <img src="../assets/GoldmanSachs.jpeg" alt=""></img>
                <p>
                  Evaluated the total upcoming risk and Initial Margin due to
                  swaptions and implemented strategies for reduction in net
                  Initial Margin to be posted. I was offerred{" "}
                  <b>full-time role</b> considering my work.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <h2>Fractal Analytics</h2>
              <div className={styles.content__div}>
                <img src="../assets/fractal_reception.jpg" alt=""></img>
                <p>
                  Implemented Named Entity Recognizer based on Conditional
                  Random Field to develop a generic clustering algorithm for
                  product description data
                </p>
              </div>
            </div>
          </div>
          {/* <div className="container right">
        <div className="content">
            <h2>Indian Institute of Science</h2>
            <div className="content__div">
            <img src={require("../assets/fractal.png")} alt=""></img>
            <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
            </p>
            </div>
        </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Internships;
