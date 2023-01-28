import { prisma } from "../../../../database/prismaClient"

interface ICreateCharacter {
  name: string;
  id_archetype: string;
}

export class CreateCharacterUseCase {
  async execute({ name, id_archetype }:ICreateCharacter) {
    const characterAlreadyExist = await prisma.characters.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        },
      }
    });

    const archetypeExist = await prisma.archetypes.findFirst({
      where: {
        id: id_archetype
      }
    })

    if (characterAlreadyExist) throw new Error('Character name already exist!');

    if (!archetypeExist) throw new Error('Archetype does not exist!')

    const findAllAttributesId = await prisma.attributes.findMany({
      select: {
        id: true
      }
    });

    const findAllStatusId = await prisma.status.findMany({
      select: {
        id: true
      }
    });

    const allAttributesId = findAllAttributesId.map(attribute => {
      return {
        id_attributes: Object.values(attribute)[0]
      }
    })

    const allStatusId = findAllStatusId.map(attribute => {
      return {
        id_status: Object.values(attribute)[0]
      }
    })

    const createCharacter = await prisma.characters.create({
      data: {
        name,
        character_attributes: {
          create: allAttributesId
        },
        character_status: {
          create: allStatusId
        },
        character_archetypes: {
          create: {
            archetypes: {
              connect: {
                id: id_archetype
              }
            }
          }
        }
      }
    });

    return createCharacter;
  }
}