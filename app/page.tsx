import Link from "next/link";
import styles from "./home.module.css";

export default function AboutMe() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Bryan Tanjaya</h1>
      <p className={styles.subtitle}>Backend-leaning software developer.</p>
      <p className={styles.description}>
        Experience across web, mobile, and internal enterprise systems with a
        focus on execution and system integration.
      </p>

      <div className={styles.navContainer}>
        <Link href="/projects" className={styles.navButton}>
          Projects
        </Link>
        <Link href="/experience" className={styles.navButton}>
          Experience
        </Link>
        <Link href="/contact" className={styles.navButton}>
          Contact
        </Link>
      </div>

      <div className={styles.profileImageWrapper}>
        <img src="/images/me.png" height={"300px"} alt="Profile Picture" className={styles.profileImage}></img>
      </div>
    </main>
  );
}
