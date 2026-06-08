import Link from "next/link";
import styles from "./home.module.css";

export default function AboutMe() {
  const skills = [
    "C#",
    ".NET Core",
    "PostgreSQL",
    "SQL Server",
    "Firebase",
    "Flutter",
    "Azure",
    "Git",
    "Docker",
  ];

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h1 className={styles.title}>Bryan Tanjaya</h1>
          <p className={styles.subtitle}>
            Software developer focused on backend systems, web applications,
            and database-driven products.
          </p>
          <p className={styles.description}>
            I build web and mobile applications using Next.js, .NET,
            PostgreSQL, SQL Server, and Firebase, with internship experience on
            internal production systems.
          </p>

          <div className={styles.navContainer}>
            <Link href="/projects" className={styles.primaryButton}>
              View Projects
            </Link>
            <Link href="/experience" className={styles.secondaryButton}>
              Experience
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact
            </Link>
          </div>
        </div>

        <div className={styles.profilePanel}>
          <img
            src="/images/me.png"
            alt="Bryan Tanjaya"
            width={420}
            height={525}
            className={styles.profileImage}
          />

          <div className={styles.highlights}>
            <div>
              <span className={styles.highlightNumber}>1 year</span>
              <span className={styles.highlightText}>experience</span>
            </div>
            <div>
              <span className={styles.highlightNumber}>5+</span>
              <span className={styles.highlightText}>portfolio projects</span>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.skillsSection} aria-labelledby="skills-heading">
        <div>
          <p className={styles.sectionLabel}>Core skills</p>
          <h2 id="skills-heading" className={styles.sectionTitle}>
            Tools I use to build practical software
          </h2>
        </div>

        <div className={styles.skillList}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}
