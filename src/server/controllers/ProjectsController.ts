import { publicProcedure } from "../api/trpc";
import { z } from "zod";

export const getAllProjects = publicProcedure.query(({ ctx }) => {
  const { prisma } = ctx;

  return prisma.project.findMany();
});

export const createProject = publicProcedure
  .input(
    z.object({
      name: z.string(),
    })
  )
  .mutation(({ ctx, input }) => {
    const { prisma } = ctx;

    return prisma.project.create({
      data: {
        name: input.name,
      },
    });
  });

export const getProject = publicProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(({ ctx, input }) => {
    return ctx.prisma.project.findUnique({
      where: {
        id: input.id,
      },
    });
  });

