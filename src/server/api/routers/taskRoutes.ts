import { createTRPCRouter } from "../trpc";
import { checkBullet, toggleBullet, uncheckBullet } from "../../controllers/TaskController";

export const taskRoutes = createTRPCRouter({
  toggleBullet,
  checkBullet,
  uncheckBullet
});
