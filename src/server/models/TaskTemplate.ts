export type TaskTemplateSchema = {
  id: string;
  name: string;
  checklists: Checklist[];
};

export type Bullet = {
  id: string;
  name: string;
}

export type Checklist = {
  id: string;
  name: string;
  bullets: Bullet[];
}

