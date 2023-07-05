import gpt3Logo from "../../logo.svg";
import styles from "./footer.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.heading}>
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className={styles.btn}>
      <p>Request Early Access</p>
    </div>

    <div className={styles.links}>
      <div className={styles.linksLogo}>
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className={styles.linksDiv}>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className={styles.linksDiv}>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className={styles.linksDiv}>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className={styles.copyright}>
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
