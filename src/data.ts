export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Social Venture Plan', href: '#social-venture-plan' },
  { label: 'Press Release', href: '#press-release' },
  { label: 'Pitch Video', href: '#pitch-video' },
  { label: 'Writing Guide', href: '#writing-guide' },
  { label: 'Artifacts', href: '#artifacts' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
] as const;

export const journeySteps = [
  { title: 'Words', description: 'Communication as persuasion and impact' },
  { title: 'Concision', description: 'Clarity as respect for the reader' },
  { title: 'Design Thinking', description: 'Human needs before assumptions' },
  { title: 'Research', description: 'Evidence that earns belief' },
  { title: 'Pitching', description: 'What you leave out matters' },
] as const;

export const featuredProjects = [
  {
    title: 'Social Venture Plan',
    teaser:
      'Research, storytelling, and persuasive writing combined into one clear, engaging message.',
    href: '#social-venture-plan',
  },
  {
    title: 'Press Release',
    teaser:
      'Direct, skimmable professional communication built for public attention.',
    href: '#press-release',
  },
  {
    title: 'Pitch Video',
    teaser:
      'Clear problem, innovation, and impact communicated under time pressure.',
    href: '#pitch-video',
  },
  {
    title: 'Writing Guide',
    teaser:
      'Style, tone, voice, and design principles for professional communication.',
    href: '#writing-guide',
  },
] as const;

export const artifacts = [
  {
    title: 'Design Thinking Discussion',
    type: 'Discussion',
    description:
      'Explored human-centered problem solving and how design thinking shapes stronger communication.',
  },
  {
    title: 'Social Entrepreneurship Values Discussion',
    type: 'Discussion',
    description:
      'Examined the values and mindset behind social entrepreneurship and purposeful writing.',
  },
  {
    title: 'Research and Storytelling Discussion',
    type: 'Discussion',
    description:
      'Practiced backing up ideas with research while keeping stories clear and persuasive.',
  },
  {
    title: 'Document Design Reflection',
    type: 'Reflection',
    description:
      'Reflected on how layout, hierarchy, and visual design affect reader engagement.',
  },
  {
    title: 'Peer Review Workshop',
    type: 'Workshop',
    description:
      'Gave and received feedback to improve clarity, structure, and professional tone.',
  },
] as const;

/**
 * Pitch video file path. Place your MP4 at `public/pitch-video.mp4`
 * (or change this path to match your filename).
 * Set to null to show the placeholder until you add a video.
 */
export const pitchVideoSrc: string | null = '/pitch-video.mp4';

export const skillsDeveloped = [
  'Concise Writing',
  'Storytelling',
  'Design Thinking',
  'Entrepreneurship',
  'Audience Awareness',
  'Persuasive Communication',
  'Visual Design',
  'Public Speaking',
  'Research',
  'Professional Writing',
] as const;

export const sectionCopy = {
  featuredProjects: {
    description:
      'A collection of major projects showcasing growth in persuasive writing, concise communication, storytelling, and entrepreneurship.',
  },
  socialVenturePlan: {
    subtitle:
      'Turning incarceration barriers into real technology careers through paid client work.',
    description:
      'The Social Venture Plan taught me how to turn an idea into something people could actually believe in and support. Building Code and Reentry forced me to research the realities of incarceration, unemployment, and workforce inequality while explaining the solution in a clear and convincing way. I learned how to balance storytelling with evidence by showing both the human impact of reentry barriers and the practical structure of the venture itself. More importantly, the project taught me that strong communication is what transforms a social mission into a realistic, fundable venture.',
  },
  pressRelease: {
    description:
      'The press release project showed me how professional communication needs to be direct, clear, and easy to skim. I learned how important headlines, quotes, and structure are when trying to grab attention quickly. This assignment also helped me practice writing in an active voice and removing unnecessary words. It taught me how organizations communicate ideas to the public in a fast and persuasive way.',
  },
  writingGuide: {
    description:
      'The Writing Guide project helped me better understand style, tone, voice, and concise writing. I learned how design and formatting affect whether readers stay engaged or stop reading. Creating examples of weak and strong writing made me more aware of common mistakes like repetition, passive voice, and fluff. This project changed the way I think about communication in professional settings.',
  },
  videoPitch: {
    description:
      'The video pitch helped me practice communicating ideas clearly under time pressure. I learned how to quickly explain a problem, innovation, and impact in a short amount of time without sounding scripted. It also improved my confidence speaking directly to an audience. This assignment showed me that strong communication is not only about writing, but also about delivery and clarity.',
  },
  artifacts: {
    description:
      'Additional assignments and discussions that contributed to my growth as a communicator and problem solver.',
  },
  about: {
    description:
      'I am a computer science student interested in software development, entrepreneurship, communication, and design thinking. Through ENGL398B, I strengthened my ability to communicate ideas clearly, design persuasive content, and write for real world audiences. My work combines creativity, structure, and problem solving to create communication that is both engaging and impactful.',
  },
} as const;
