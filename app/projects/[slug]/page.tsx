import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import styles from "./projectDetails.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Link href="/projects" className={styles.backLink}>
        Back to projects
      </Link>

      <section className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.platform}>{project.platform}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.overview}</p>

          <div className={styles.techList}>
            {project.tech.map((item) => (
              <span key={item} className={styles.techTag}>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.actions}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Visit Project
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                View Repo
              </a>
            )}
          </div>
        </div>

        <div className={styles.summaryCard}>
          <h2 className={styles.cardTitle}>What this project covers</h2>
          <ul className={styles.cardList}>
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.detailGrid}>
        <div className={styles.detailCard}>
          <h2 className={styles.cardTitle}>Features</h2>
          <ul className={styles.cardList}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.detailCard}>
          <h2 className={styles.cardTitle}>What I learned</h2>
          <ul className={styles.cardList}>
            {project.learnings.map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.reflection && (
        <section className={styles.reflection}>
          <h2 className={styles.cardTitle}>Reflection</h2>
          <p>{project.reflection}</p>
        </section>
      )}

      <div className={styles.gallery}>
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            width={1400}
            height={900}
            className={styles.image}
          />
        ))}
      </div>
    </main>
  );
}
