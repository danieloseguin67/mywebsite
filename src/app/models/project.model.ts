export interface Project {
  slug: string;
  name: string;
  description: string;
  technology: string;
  detailPlaceholder: string;
}

export interface ProjectData {
  en: Project[];
  fr: Project[];
}
