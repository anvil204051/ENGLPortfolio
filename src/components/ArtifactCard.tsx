type ArtifactCardProps = {
  title: string;
  type: string;
  description: string;
};

export function ArtifactCard({ title, type, description }: ArtifactCardProps) {
  return (
    <article className="artifact-card">
      <span className="artifact-card__type">{type}</span>
      <h3 className="artifact-card__title">{title}</h3>
      <p className="artifact-card__description">{description}</p>
    </article>
  );
}
