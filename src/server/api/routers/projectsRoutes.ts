import { createTRPCRouter } from "../trpc";
import {
  addTaskTemplate,
  createProject,
  getAllProjects,
  getProject,
} from "../../controllers/ProjectsController";

export const projectsRoutes = createTRPCRouter({
  getAllProjects,

  createProject,

  getProject,

  addTaskTemplate,
});
