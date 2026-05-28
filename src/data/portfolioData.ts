import { ExperienceItem, FocusItem, SkillItem, EducationItem, ProjectItem } from '../types';

export const portfolioMetadata = {
  name: 'Kiran Kumar Pasupuleti',
  displayName: 'Kiran Kumar',
  role: '.NET Technology Lead & Solutions Architect',
  email: 'KEEYRUN@outlook.com',
  location: 'Canada / Worldwide',
  bio: "I build AI-enabled enterprise platforms, release readiness automation, and cloud-integrated .NET systems that unify legacy architecture, streamline API contracts, and accelerate business consolidation during mergers and acquisitions.",
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmweOQ6vdfKoJ1n3ibulpVhYk2hhADlvmYayuwGFpYYd_QZfzUP5k9I_GnfjQTRSm9PwvFtATIOD-KqcwKkoilh6Tc9LtBF9aNp1-7Wu3Zpt-7YLZBbgh5r9M7MYYiGe17YRUCBaFTnTnwa6b3unt7ZSQ8_MizmHcta75nzzrl9yQ0rHKNYiKM-qrMQTuF7Ix9N5Ms6q0FYV0KpMN6bN46kUlexoXFh-PiQtOdN8tjENo57M0Gdoq_9RjTBKDpjVS2SvnxTvicqNRr',
  github: 'https://github.com/keeyrun1/Portfolio',
  releaseTag: 'v2.1',
  commits: '10+ Years',
  tsMastery: 'Azure Cloud',
  designFocus: 'Enterprise'
};

export const experiences: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Technology Lead',
    company: 'Infosys Limited (Canada)',
    period: 'DEC 2016 - PRESENT',
    description: 'Led SDLC and architecture for web-based intranet & Risk Monitoring Applications using .NET Core 2/3/6, C#, PCF, and Harness. Designed CSS templates, built highly scalable full-stack portals, created Splunk support analytical dashboards, migrated 11 legacy apps to IaaS environments, and coordinated onshore/offshore Agile sprints.',
    tags: ['.NET Core', 'C#', 'Aerospike', 'Kafka', 'PCF', 'Splunk', 'DB2', 'SQL Server']
  },
  {
    id: 'exp2',
    role: 'Associate',
    company: 'Cognizant Technology Solutions (India)',
    period: 'DEC 2011 - NOV 2016',
    description: 'Developed critical business components in C#, ASP.NET MVC, and migrated backend systems to WCF. Set up and debugged WCF servers on Windows Services, managed strict Agile system and unit testing, and participated in end-to-end SDLC planning, auditing, and production implementation.',
    tags: ['C#', 'ASP.NET MVC', 'WCF', 'SQL Server', 'Entity Framework', 'Jira', 'Git']
  }
];

export const currentFocus: FocusItem[] = [
  { icon: 'Zap', text: 'Building Enterprise AI Agents' },
  { icon: 'Layers', text: 'System Integration & Consolidation' },
  { icon: 'Users', text: 'Onshore & Offshore Technical Leadership' }
];

export const skills: SkillItem[] = [
  { name: 'C# / .NET', level: 'Enterprise Expert', category: 'Language', color: 'blue', percentage: 98 },
  { name: 'Microsoft Azure', level: 'Cloud Architect', category: 'Tools', color: 'indigo', percentage: 95 },
  { name: 'ASP.NET Core', level: 'Scalable Services', category: 'Principle', color: 'orange', percentage: 97 },
  { name: 'SQL Server / DB2', level: 'Relational Database', category: 'Language', color: 'amber', percentage: 94 },
  { name: 'Docker / K8s', level: 'Containers & PCF', category: 'Tools', color: 'cyan', percentage: 90 },
  { name: 'AI Workflows', level: 'LLM Agents & Prompting', category: 'Principle', color: 'magenta', percentage: 88 }
];

export const educations: EducationItem[] = [
  {
    id: 'edu1',
    type: 'Degree',
    title: 'Bachelor of Technology',
    provider: 'Jawaharlal Nehru Technological University, Hyderabad',
    description: 'Computer Science Engineering (Graduated 2011). Specialized in object-oriented structures, algorithms, information systems, and database engineering methodologies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_40DEgXfirwaIa3kCv6qmcO19NfpPP43xgFFrLVLn6fyvsGntQTR3hOoQ-e3I1dfbg0kwDWT7pXCtcD34n6Lvh6p4OuhxVSBVi0SlUH5rkbwL-UEzNhZAXHw9OKzqbJqpO3_TXW-GBBTPmQwTBJUuGu--o-XxDXGuJ6R_DctuTk8AUykP2GcTOy9mmpseJcQhFbDVEtoiHzG4WkD_xlmX-W6JtLKOj3rybNq9cuRf0tm2cxJ41kh36Si3ohw6PCPt43Wq52bYBOB5'
  },
  {
    id: 'edu2',
    type: 'Certifications',
    title: 'Professional Credentials Portfolio',
    provider: 'Google, Microsoft & Infosys Certified',
    description: 'Google Cloud Certified Associate Cloud Engineer (Jan 2024 - Jan 2027, ID: 91531373), Azure Fundamentals, AZ-900, Financial Capital Markets Specialist, and Agile Scrum Practitioner.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBae05fS3am83_bduvNI71rNxSMGS8jI6CgalFqbxPNqQvf3Zd5uBGsrItyOKhdQvcoOsN2CRl3BFHzJm6vn_idXVlnP35sbcLzu2XyWnnGbLvj2ElPikRENZO16f3LoTp4yEqZMCTJLCC2UVFcvXFwHbUQ3EjFPwR--VBgWVLaxfoyXbFSUPw84Sma63VlRAaynxx9z1Y3jtBk5f8Zs0lmUhkbqewAr0rL5fc_GeqhiDEO8apFrVo9Tm8yS2HaJ_KyFRqdhejgCZ7g'
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Release Readiness Auto-Agent',
    role: 'Lead Architect',
    description: 'An AI-driven operational automation pipeline utilizing task-specific agents and large language models (LLMs) to automatically verify release checklists, scan security audits, and assess risk metrics across microservices.',
    tags: ['C#', 'AI Agents', 'LLM Integration', 'Azure', 'Harness']
  },
  {
    id: 'p2',
    title: 'Enterprise Integration Platform',
    role: 'Consolidation Architect',
    description: 'Harmonized legacy architectures into unified platforms during critical corporate mergers. Aligned distributed APIs, standardized data contracts, and consolidated Kafka frameworks with minimal client disruption.',
    tags: ['.NET Core', 'Kafka', 'DB2', 'PCF', 'API Design']
  },
  {
    id: 'p3',
    title: 'Risk Monitoring Audit Engine',
    role: 'Technology Lead',
    description: 'High-performance web dashboard evaluating financial transaction compliance metrics. Utilizes ultra-fast Aerospike caching, SQL replication layers, and real-time Splunk health analytics.',
    tags: ['.NET Core', 'Splunk', 'Aerospike', 'WCF', 'SQL Server']
  }
];
