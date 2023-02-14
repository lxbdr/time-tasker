import { publicProcedure } from "../api/trpc";
import { z } from "zod";

export const CreateTaskTemplateSchema = z.object({
  name: z.string(),
});

export const createTaskTemplate = publicProcedure
  .input(CreateTaskTemplateSchema)
  .mutation(async ({ ctx, input }) => {
    const { prisma } = ctx;
    await prisma.taskTemplate.create({
      data: {
        name: input.name,
      },
    });
  });

export const getAllTaskTemplates = publicProcedure.query(({ ctx }) => {
  const { prisma } = ctx;

  return prisma.taskTemplate.findMany();
});

export const addBullet = publicProcedure
  .input(
    z.object({
      taskTemplateId: z.string(),
      checklistTemplateId: z.string(),
      name: z.string(),
    })
  )
  .mutation(({ ctx, input }) => {
    const { prisma } = ctx;

    return prisma.bulletTemplate.create({
      data: {
        name: input.name,
        checklistTemplateId: input.checklistTemplateId,
      },
    });
  });

export const getTaskTemplate = publicProcedure
  .input(z.object({ id: z.string() }))
  .query(({ ctx, input }) => {
    const { prisma } = ctx;

    return prisma.taskTemplate.findUnique({
      where: {
        id: input.id,
      },
      include: {
        checklistTemplates: {
          include: {
            bulletTemplates: {},
          },
        },
      },
    });
  });

export const createChecklist = publicProcedure
  .input(
    z.object({
      taskId: z.string(),
      name: z.string(),
    })
  )
  .mutation(({ ctx, input }) => {
    const { prisma } = ctx;

    return prisma.checklistTemplate.create({
      data: {
        name: input.name,
        taskTemplates: {
          connect: [
            {
              id: input.taskId,
            },
          ],
        },
      },
    });
  });
