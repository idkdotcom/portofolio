import styles from "./experience.module.css";

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Experience</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>
          PT Realta Chakradarma{" "}
        </h2>
        <h3 className={styles.role}>Application Development Intern</h3>
        <h4 className={styles.role}>February 2025 - February 2026</h4>

        <p className={styles.description}>
          Worked on internal web and desktop applications used in production
          environments.
        </p>

        <h3 className={styles.heading}>Tech Stack</h3>
        <ul className={styles.list}>
          <li>Web: HTML, CSS, JavaScript</li>
          <li>Desktop: VB.NET, C# .NET Core</li>
          <li>Database: SQL Server (SSMS, stored procedures)</li>
        </ul>

        <h3 className={styles.heading}>Responsibilities</h3>
        <ul className={styles.list}>
          <li>Integrated static HTML designs with backend services</li>
          <li>Implemented API functions in C# and VB.NET</li>
          <li>Connected application logic to SQL Server stored procedures</li>
          <li>Debugged database issues using SSMS</li>
          <li>Collaborated within a multi-developer team</li>
        </ul>

        <p className={styles.note}>
          Detailed documentation and source code are unavailable due to NDA
          restrictions.
        </p>
      </section>
    </main>
  );
}
