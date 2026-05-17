type SkillPillProps = {
  label: string;
};

export function SkillPill({ label }: SkillPillProps) {
  return <span className="skill-pill">{label}</span>;
}
