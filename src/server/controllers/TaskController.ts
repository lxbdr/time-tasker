import { publicProcedure } from "../api/trpc";
import { z } from "zod";
import { prisma as prismaClient } from "../../server/db";

const findBulletInput = z.object({
  id: z.string(),
});

const findBullet = async (prisma: typeof prismaClient, bulletId: string) => {
  const bullet = await prisma.bullet.findUnique({
    where: {
      id: bulletId,
    },
  });

  return bullet;
};

const setBulletChecked = (
  prisma: typeof prismaClient,
  bulletId: string,
  checked: boolean
) => {
  return prisma.bullet.update({
    where: {
      id: bulletId,
    },
    data: {
      checked: checked,
    },
  });
};

export const toggleBullet = publicProcedure
  .input(
    findBulletInput.and(
      z.object({
        checked: z.oboolean(),
      })
    )
  )
  .mutation(async ({ ctx, input }) => {
    const { prisma } = ctx;

    if (input.checked !== undefined) {
      return setBulletChecked(prisma, input.id, input.checked);
    }

    const bullet = await findBullet(prisma, input.id);

    if (!bullet) {
      throw new Error("Invalid bulletId");
    }

    return prisma.bullet.update({
      where: {
        id: bullet.id,
      },
      data: {
        checked: !bullet.checked,
      },
    });
  });

export const checkBullet = publicProcedure
  .input(findBulletInput)
  .mutation(async ({ ctx, input }) => {
    const { prisma } = ctx;

    return setBulletChecked(prisma, input.id, true);
  });

export const uncheckBullet = publicProcedure
  .input(findBulletInput)
  .mutation(async ({ ctx, input }) => {
    const { prisma } = ctx;

    return setBulletChecked(prisma, input.id, true);
  });
