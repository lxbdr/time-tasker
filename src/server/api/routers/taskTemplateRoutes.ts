import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import {
  addBullet,
  createChecklist,
  getAllTaskTemplates,
  getTaskTemplate,
} from "../../controllers/TaskTemplateController";

export const taskTemplateRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  get: getTaskTemplate,

  getAll: getAllTaskTemplates,

  addBullet,

  createChecklist,

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
