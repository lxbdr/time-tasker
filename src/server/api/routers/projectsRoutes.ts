import { createTRPCRouter } from "../trpc";
import {
  createProject,
  getAllProjects,
} from "../../controllers/ProjectsController";

export const projectsRoutes = createTRPCRouter({
  getAllProjects,

  createProject,
});
