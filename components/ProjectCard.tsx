import { Project } from "@/data/projects";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.overview}>{project.overview}</p>

      <p className={styles.detail}>
        <strong>Platform:</strong> {project.platform}
      </p>

      <p className={styles.detail}>
        <strong>Tech:</strong> {project.tech.join(", ")}
      </p>

      <div className={styles.buttons}>
        {project.repo && (
          <a href={project.repo} target="_blank" className={styles.button}>
            View Repo
          </a>
        )}
        <Link href={`/projects/${project.slug}`} className={styles.button}>
          Details
        </Link>
      </div>
    </article>
  );
}
