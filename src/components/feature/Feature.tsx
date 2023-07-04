import styles from "./feature.module.css";

type FeatureProps = {
  title: string;
  text: string;
};

const Feature = ({ title, text }: FeatureProps) => (
  <div className={styles.feature}>
    <div className={styles.featureTitle}>
      <div />
      <h1>{title}</h1>
    </div>
    <div className={styles.featureText}>
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
