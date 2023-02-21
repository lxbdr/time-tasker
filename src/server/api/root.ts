import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { taskTemplateRouter } from "./routers/taskTemplateRoutes";
import { projectsRoutes } from "./routers/projectsRoutes";
import { taskRoutes } from "./routers/taskRoutes";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  taskTemplate: taskTemplateRouter,
  project: projectsRoutes,
  task: taskRoutes,
});

// export type definition of API
export type AppRouter = typeof appRouter;
