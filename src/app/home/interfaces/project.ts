export type ProjectType = 'ui/ux design' | 'branding design' | 'wordpress';
export interface Project {
  name: string;
  imgPath: string;
  type: ProjectType;
}
