import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Selected work</p>
        <h1 className={styles.title}>Projects that show how I build.</h1>
        <p className={styles.description}>
          A mix of web, mobile, and database-driven work focused on product
          execution, backend logic, and practical user-facing features.
        </p>
      </section>
      <section className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
