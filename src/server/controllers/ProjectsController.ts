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
      include: {
        tasks: {
          include: {
            checklists: {
              include: {
                bullets: {}
              }
            }
          }
        },
      },
    });
  });

export const addTaskTemplate = publicProcedure
  .input(
    z.object({
      taskTemplateId: z.string(),
      projectId: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { prisma } = ctx;
    // find tasktemplate
    const taskTemplate = await prisma.taskTemplate.findUnique({
      where: {
        id: input.taskTemplateId,
      },
      include: {
        checklistTemplates: {
          include: {
            bulletTemplates: {},
          },
        },
      },
    });

    if (!taskTemplate) {
      throw new Error("Task template not found.");
    }

    // create nested instances from checklist templates
    // and bullet templates
    const checklists = taskTemplate.checklistTemplates.map(
      (checklistTemplate) => {
        return {
          name: checklistTemplate.name, // todo: name override handling
          checklistTemplate: {
            connect: {
              id: checklistTemplate.id,
            },
          },
          bullets: {
            create: checklistTemplate.bulletTemplates.map((bulletTemplate) => {
              return {
                checked: false,
                name: bulletTemplate.name, // todo: name is override
                bulletTemplate: {
                  connect: {
                    id: bulletTemplate.id,
                  },
                },
              };
            }),
          },
        };
      }
    );

    const task = await prisma.task.create({
      data: {
        name: taskTemplate.name,
        project: {
          connect: {
            id: input.projectId,
          },
        },
        checklists: {
          create: checklists,
        },
      },
    });

    return task;
  });
