export interface ProjectAttachment {
  title: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technology: string;
  detailPlaceholder: string | string[];
  attachments?: ProjectAttachment[];
}

export interface ProjectData {
  en: Project[];
  fr: Project[];
}
