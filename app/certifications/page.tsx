import { certifications } from "@/data/certifications";
import styles from "./certifications.module.css";

export default function CertificationsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Certifications</h1>

      {certifications.map((cert) => (
        <section key={cert.title} className={styles.section}>
          <h2 className={styles.subtitle}>{cert.title}</h2>
          <p className={styles.provider}>{cert.provider}</p>
          <p className={styles.summary}>{cert.summary}</p>
          <p className={styles.scope}>
            <strong>Scope:</strong> {cert.scope.join(", ")}
          </p>
          <a href={cert.link} target="_blank" className={styles.button}>
            View Certificate
          </a>
        </section>
      ))}
    </main>
  );
}
