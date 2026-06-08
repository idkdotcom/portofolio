import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            <img
              src="/images/nice-logo.png"
              className={styles.logoDark}
              width={48}
              height={48}
              alt="Bryan Tanjaya logo"
            />
            <span className={styles.brandText}>Bryan Tanjaya</span>
          </Link>

          <ul className={styles.navList}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/projects" className={styles.link}>Projects</Link></li>
            <li><Link href="/experience" className={styles.link}>Experience</Link></li>
            <li><Link href="/certifications" className={styles.link}>Certifications</Link></li>
            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.right}>
          <ThemeToggle />
        </div>
      </div>
    </nav>

  );
}
