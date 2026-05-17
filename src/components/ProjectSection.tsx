import type { ReactNode } from 'react';
import { SkillPill } from './SkillPill';

type ProjectSectionProps = {
  overview: string;
  skills: readonly string[];
  children?: ReactNode;
};

export function ProjectSection({ overview, skills, children }: ProjectSectionProps) {
  return (
    <>
      <h3 className="project-block__label">Overview</h3>
      <p className="narrative document-text">{overview}</p>
      <div className="skills-block">
        <h3 className="skills-block__title">Skills gained</h3>
        <div className="skills-block__pills">
          {skills.map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </div>
      {children}
    </>
  );
}
