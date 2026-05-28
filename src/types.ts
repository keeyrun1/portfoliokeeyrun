export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface FocusItem {
  icon: string;
  text: string;
}

export interface SkillItem {
  name: string;
  level: string;
  category: string;
  color: string;
  percentage: number;
}

export interface EducationItem {
  id: string;
  type: 'Degree' | 'Certifications';
  title: string;
  provider: string;
  description: string;
  image: string;
}

export interface LabCertification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  status: 'VERIFIED' | 'ACTIVE' | 'ARCHIVED';
  systemCode: string;
  verifyUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
