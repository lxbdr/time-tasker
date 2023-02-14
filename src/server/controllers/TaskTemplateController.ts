import { publicProcedure } from "../api/trpc";
import { TaskTemplateSchema } from "../models/TaskTemplate";
import { z } from "zod";

const taskTemplates: TaskTemplateSchema[] = [
  {
    id: 1,
    name: "Küche",
    checklists: [],
  },
  {
    id: 2,
    name: "Badezimmer",
    checklists: [],
  },
];

export const getAllTaskTemplates = publicProcedure.query(() => {
  return taskTemplates;
});

export const addBullet = publicProcedure
  .input(
    z.object({
      taskTemplateId: z.number(),
      checklistId: z.number(),
      name: z.string(),
    })
  )
  .mutation(({ ctx, input }) => {
    const item = findTaskTemplate(input.taskTemplateId);
    if (!item) {
      return;
    }
    const checklist = findChecklist(item, input.checklistId);
    if (!checklist) {
      return;
    }
    checklist.bullets.push({
      id: randomId(),
      name: input.name,
    });
  });

function findChecklist(taskTemplate: TaskTemplateSchema, checklistId: number) {
  return taskTemplate.checklists.find(
    (checklist) => checklist.id === checklistId
  );
}

export const getTaskTemplate = publicProcedure
  .input(z.object({ id: z.number() }))
  .query(({ input }) => {
    // todo: fetch task template
    return taskTemplates[0];
  });

function findTaskTemplate(id: number) {
  return taskTemplates.find((el) => el.id === id);
}

export const createChecklist = publicProcedure
  .input(
    z.object({
      taskId: z.number(),
      name: z.string(),
    })
  )
  .mutation(({ ctx, input }) => {
    const item = findTaskTemplate(input.taskId);

    item?.checklists.push({
      id: randomId(),
      name: input.name,
      bullets: [],
    });
  });

function randomId() {
  return Math.floor(Math.random() * 10000);
}
