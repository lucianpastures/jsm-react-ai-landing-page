import styles from "./cta.module.css";

const CTA = () => (
  <div className={styles.cta}>
    <div className={styles.content}>
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className={styles.btn}>
      <button type="button">Get Started</button>
    </div>
  </div>
);

export default CTA;
