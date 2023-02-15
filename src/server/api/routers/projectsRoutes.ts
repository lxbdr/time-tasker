import { createTRPCRouter } from "../trpc";
import {
  createProject,
  getAllProjects,
  getProject,
} from "../../controllers/ProjectsController";

export const projectsRoutes = createTRPCRouter({
  getAllProjects,

  createProject,

  getProject,
});
