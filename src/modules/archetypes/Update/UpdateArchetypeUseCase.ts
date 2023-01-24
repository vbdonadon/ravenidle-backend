import { prisma } from "../../../database/prismaClient";

interface IUpdateArchetype {
  id: string;
  id_archetype: string
}

export class UpdateArchetypeUseCase {
  async execute({ id, id_archetype }: IUpdateArchetype) {
    const archetypeExist = await prisma.archetypes.findFirst({
      where: {
        id: id_archetype
      }
    })

    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      },
      select: {
        character_archetypes: {
          select: {
            archetypes: true
          }
        }
      }
    });    

    if (!characterExist) throw new Error('Character does not exist or was not found');

    if (!archetypeExist) throw new Error('Archetype does not exist or was not found');

    if (characterExist.character_archetypes.length >= 3) throw new Error('Character already have three archetypes');

    characterExist?.character_archetypes.map(charArchetype => {
      if (charArchetype.archetypes.id == id_archetype) throw new Error('Character already have this archetype!')
    })

    const characterArchetype = await prisma.characters.update({
      where: {
        id
      },
      data: {
        character_archetypes: {
          create: {
            archetypes: {
              connect: {
                id: id_archetype,
              },
            }
          }
        }
      }
    });

    return characterArchetype;
  }
}