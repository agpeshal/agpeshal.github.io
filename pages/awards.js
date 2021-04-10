import styles from "../styles/Awards.module.css";
import Head from "next/head";
const Awards = () => {
  return (
    <>
      <Head>
        <title>Awards | Peshal Agarwal ETH Zurich</title>
      </Head>
      <div className={styles.awards}>
        <div className={styles.awards__image__1}>
          <img
            alt="Peshal Agarwal being awarded by Mr. RC Bhargava"
            src="../assets/award.JPG"
          ></img>
        </div>
        <div className={styles.awards__image__2}>
          <img
            alt="Peshal Agarwal degree of graduation from IIT Kanpur"
            src="../assets/degree.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Awards;
