export type TaskTemplateSchema = {
  id: number;
  name: string;
  checklists: Checklist[];
};

export type Bullet = {
  id: number;
  name: string;
}

export type Checklist = {
  id: number;
  name: string;
  bullets: Bullet[];
}

