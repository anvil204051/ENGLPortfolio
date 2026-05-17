import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ArtifactCard } from './components/ArtifactCard';
import { SkillPill } from './components/SkillPill';
import {
  journeySteps,
  featuredProjects,
  artifacts,
  skillsDeveloped,
  sectionCopy,
  pitchVideoSrc,
} from './data';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* HOME — HERO */}
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <div className="container hero__inner">
            <p className="hero__eyebrow">ENGL398B · Writing for Social Entrepreneurs</p>
            <h1 id="hero-heading" className="hero__title">
              Anvay Moghe
            </h1>
            <p className="hero__subtitle hero__subtitle--tagline">Words Are Power</p>
            <p className="hero__body">
              Writing for Real World Impact Through Communication, Design Thinking, and
              Entrepreneurship.
            </p>
            <div className="hero__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => scrollTo('#featured-projects')}
              >
                Explore the Portfolio
              </button>
            </div>
          </div>
          <div className="hero__gradient" aria-hidden="true" />
        </section>

        {/* HOME — INTRO */}
        <section className="intro section" aria-labelledby="journey-heading">
          <div className="container">
            <h2 id="journey-heading" className="section-title">
              My 398B Journey
            </h2>
            <div className="prose document-text">
              <p>
                This course changed the way I think about communication. At the beginning of
                ENGL398B, I approached writing like a typical academic assignment focused on length
                and sounding formal. Over time, I learned that strong real world writing is clear,
                concise, and purposeful. Through projects like the Social Venture Plan, Press
                Release, Writing Guide, and Pitch Video, I developed skills in persuasive
                communication, storytelling, design thinking, and audience awareness. Each
                assignment pushed me to remove fluff, communicate ideas directly, and write in a
                way that grabs attention and creates impact.
              </p>
              <p>
                The biggest takeaway from this course is that words have power. Whether designing
                a social venture, pitching an idea, or writing a press release, communication
                shapes how people think, react, and engage. I learned how style, tone, voice, and
                design work together to make writing stronger and more memorable. This portfolio
                reflects my growth as a communicator and problem solver, showing how I learned to
                create writing that feels professional, engaging, and built for real world audiences
                rather than just the classroom.
              </p>
            </div>

            <div className="timeline">
              {journeySteps.map((step, index) => (
                <div key={step.title} className="timeline__step">
                  <span className="timeline__number">{index + 1}</span>
                  <div>
                    <h3 className="timeline__title">{step.title}</h3>
                    <p className="timeline__desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOME — FEATURED PROJECTS */}
        <section
          id="featured-projects"
          className="featured section"
          aria-labelledby="featured-heading"
        >
          <div className="container">
            <h2 id="featured-heading" className="section-title">
              Featured Projects
            </h2>
            <p className="section-lead document-text">{sectionCopy.featuredProjects.description}</p>
            <div className="card-grid card-grid--4">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL VENTURE PLAN */}
        <Section
          id="social-venture-plan"
          title="Social Venture Plan"
          subtitle={sectionCopy.socialVenturePlan.subtitle}
        >
          <p className="narrative document-text">{sectionCopy.socialVenturePlan.description}</p>
        </Section>

        {/* PRESS RELEASE */}
        <Section id="press-release" title="Press Release" dark>
          <p className="narrative document-text">{sectionCopy.pressRelease.description}</p>
        </Section>

        {/* VIDEO PITCH */}
        <Section id="pitch-video" title="Pitch Video">
          <p className="narrative document-text">{sectionCopy.videoPitch.description}</p>
          <div className="video-card">
            <h3 className="video-card__title">Pitch Video</h3>
            {pitchVideoSrc ? (
              <video
                className="video-card__player"
                src={pitchVideoSrc}
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support embedded video.{' '}
                <a href={pitchVideoSrc}>Download the pitch video</a>.
              </video>
            ) : (
              <div
                className="video-card__placeholder"
                role="img"
                aria-label="Video placeholder"
              >
                <span className="video-card__play" aria-hidden="true">
                  ▶
                </span>
                <p>Add your MP4 to <code>public/pitch-video.mp4</code></p>
                <p className="video-card__helper">
                  Then set <code>pitchVideoSrc</code> in <code>src/data.ts</code>.
                </p>
              </div>
            )}
          </div>
        </Section>

        {/* WRITING GUIDE */}
        <Section id="writing-guide" title="Writing Guide" dark>
          <p className="narrative document-text">{sectionCopy.writingGuide.description}</p>
        </Section>

        {/* ARTIFACTS */}
        <Section
          id="artifacts"
          title="Course Artifacts"
          subtitle={sectionCopy.artifacts.description}
        >
          <div className="card-grid card-grid--3 artifact-grid">
            {artifacts.map((artifact) => (
              <ArtifactCard key={artifact.title} {...artifact} />
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about" title="About Me" dark>
          <p className="narrative document-text">{sectionCopy.about.description}</p>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills Developed">
          <div className="skills-block skills-block--standalone">
            <div className="skills-block__pills">
              {skillsDeveloped.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p className="site-footer__main">
            Anvay Moghe | ENGL398B: Writing for Social Entrepreneurs | University of Maryland
          </p>
        </div>
      </footer>
    </>
  );
}
