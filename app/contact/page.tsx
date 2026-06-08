import styles from './contact.module.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.title}>Open to software roles and technical conversations.</h1>
        <p className={styles.description}>
          The fastest way to reach me is by email. GitHub is also available for
          project history and source code.
        </p>
      </section>

      <section className={styles.grid}>
        <a href="mailto:bryantanjaya904@gmail.com" className={styles.card}>
          <FaEnvelope size={28} />
          <div>
            <h2>Email</h2>
            <p>bryantanjaya904@gmail.com</p>
          </div>
        </a>

        <a
          href="https://github.com/idkdotcom"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <FaGithub size={28} />
          <div>
            <h2>GitHub</h2>
            <p>github.com/idkdotcom</p>
          </div>
        </a>
      </section>
    </main>
  );
}
