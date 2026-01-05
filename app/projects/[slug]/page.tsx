import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
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
      <h1 className={styles.title}>{project.title}</h1>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          View Website
        </a>
      )}
      <p className={styles.description}>{project.overview}</p>

      <div className={styles.gallery}>
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </main>
  );
}