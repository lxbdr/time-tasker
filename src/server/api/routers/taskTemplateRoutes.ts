import { createTRPCRouter } from "../trpc";
import {
  addBullet,
  createChecklist,
  createTaskTemplate,
  getAllTaskTemplates,
  getTaskTemplate,
} from "../../controllers/TaskTemplateController";

export const taskTemplateRouter = createTRPCRouter({
  createTaskTemplate,

  get: getTaskTemplate,

  getAll: getAllTaskTemplates,

  addBullet,

  createChecklist,
});
