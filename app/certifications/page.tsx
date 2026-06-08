import { certifications } from "@/data/certifications";
import styles from "./certifications.module.css";

export default function CertificationsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Certifications</p>
        <h1 className={styles.title}>Formal coursework backing core skills.</h1>
        <p className={styles.description}>
          Supporting coursework focused on web and mobile development
          fundamentals, with emphasis on practical implementation.
        </p>
      </section>

      <section className={styles.grid}>
        {certifications.map((cert) => (
          <article key={cert.title} className={styles.section}>
            <p className={styles.provider}>{cert.provider}</p>
            <h2 className={styles.subtitle}>{cert.title}</h2>
            <p className={styles.summary}>{cert.summary}</p>
            <div className={styles.scopeList}>
              {cert.scope.map((item) => (
                <span key={item} className={styles.scopeTag}>
                  {item}
                </span>
              ))}
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              View Certificate
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
