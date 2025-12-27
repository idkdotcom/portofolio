import styles from './contact.module.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Me</h1>
      <div className={styles.contactLinks}>
        <a href="https://github.com/idkdotcom" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          <FaGithub size={32} />
          <span>GitHub</span>
        </a>
        <a href="mailto:bryantanjaya904@gmail.com" className={styles.contactLink}>
          <FaEnvelope size={32} />
          <span>Gmail</span>
        </a>
      </div>
    </div>
  );
}