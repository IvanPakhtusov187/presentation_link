export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  period?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface ProjectsPlaceholder {
  title: string;
  message: string;
  footnote: string;
  statusLabel: string;
  gifUrl: string;
  gifAlt: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface AiWorkflowStep {
  id: string;
  label: string;
}

export interface HeroData {
  name: string;
  role: string;
  subtitle: string;
  description: string;
  resumeUrl: string;
}

export interface AboutItem {
  id: string;
  text: string;
}
