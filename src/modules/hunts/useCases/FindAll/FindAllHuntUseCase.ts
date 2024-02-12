import { prisma } from "../../../../database/prismaClient";

interface IFindAllHunt {
  id_character: string
}

export class FindAllHuntUseCase {
  async execute({ id_character }: IFindAllHunt) {
    const character = await prisma.characters.findFirst({
      where: {
        id: id_character
      },
      select: {
        name: true,
        level: true
      }
    })

    if (!character) throw new Error('Character does not exist or was not found');

    const monsters = await prisma.monsters.findMany({
      where: {
        AND: {
          level: {
            lte: character.level + 5
          }
        },
        level: {
          gte: character.level,
        }

      },
      select: {
        name: true,
        attack: true,
        defense: true,
        level: true,
        category: true,
        id: true,
      }
    })

    return monsters
  }
}