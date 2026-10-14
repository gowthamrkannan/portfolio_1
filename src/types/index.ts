export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  image: string;
  summary: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  features: string[];
  databaseDesign?: {
    tables: string[];
    triggers: string[];
    integrityConstraints: string[];
  };
  learningOutcomes: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experience: string;
    highlight: string;
    tags: string[];
    iconName: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  techUsed: string[];
  verifiedCredential?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  field: string;
  status: string;
  courses: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  status: 'Completed' | 'In Progress';
  description: string;
  tags: string[];
}
