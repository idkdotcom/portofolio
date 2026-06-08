import styles from "./experience.module.css";

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Experience</p>
        <h1 className={styles.title}>Production-facing internship experience.</h1>
        <p className={styles.description}>
          Experience building and supporting internal business applications
          across web, desktop, and database layers.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.company}>PT Realta Chakradarma</h2>
            <p className={styles.role}>Application Development Intern</p>
          </div>
          <p className={styles.period}>February 2025 - February 2026</p>
        </div>

        <p className={styles.summary}>
          Worked on internal applications used in production environments,
          helping connect frontend interfaces, backend services, and SQL Server
          workflows in a multi-developer team.
        </p>

        <div className={styles.columns}>
          <div className={styles.card}>
            <h3 className={styles.heading}>Core contributions</h3>
            <ul className={styles.list}>
              <li>Integrated HTML-based interfaces with backend services.</li>
              <li>Built and updated API functions in C# and VB.NET.</li>
              <li>Connected application logic to SQL Server stored procedures.</li>
              <li>Investigated database issues using SSMS and query debugging.</li>
              <li>Collaborated with other developers on shared production work.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.heading}>Tech stack</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>HTML</span>
              <span className={styles.tag}>CSS</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>VB.NET</span>
              <span className={styles.tag}>C# .NET Core</span>
              <span className={styles.tag}>SQL Server</span>
              <span className={styles.tag}>SSMS</span>
              <span className={styles.tag}>Stored Procedures</span>
            </div>
          </div>
        </div>

        <p className={styles.note}>
          Detailed product specifics and source code are unavailable due to NDA
          restrictions.
        </p>
      </section>
    </main>
  );
}
