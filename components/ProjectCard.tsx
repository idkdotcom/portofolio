import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={project.images[0]}
          alt={`${project.title} preview`}
          width={1200}
          height={900}
          className={styles.image}
        />
      </div>

      <div className={styles.header}>
        <span className={styles.platform}>{project.platform}</span>
        <h2 className={styles.title}>{project.title}</h2>
      </div>

      <p className={styles.overview}>{project.overview}</p>

      <div className={styles.techList}>
        {project.tech.map((item) => (
          <span key={item} className={styles.techTag}>
            {item}
          </span>
        ))}
      </div>

      <ul className={styles.featureList}>
        {project.features.slice(0, 3).map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className={styles.buttons}>
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
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            Live Site
          </a>
        )}
        <Link href={`/projects/${project.slug}`} className={styles.primaryButton}>
          Details
        </Link>
      </div>
    </article>
  );
}
