type ProjectCardProps = {
  title: string;
  teaser: string;
  href: string;
};

export function ProjectCard({ title, teaser, href }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__teaser">{teaser}</p>
      <a href={href} className="project-card__link">
        View project
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
