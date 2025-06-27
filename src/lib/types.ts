export type HomePageContent = {
  title: string;
  introParagraph: string;
};

export type Skill = {
  id: string;
  visible: boolean;
  name:string;
  description: string;
  level: number;
  keywords: string[];
};

export type SkillsContent = {
  items: Skill[];
};

export type Project = {
  title: string;
  description: string;
  category: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  sortOrder: number;
};