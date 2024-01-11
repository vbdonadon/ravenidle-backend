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
      },
      select: {
        name: true
      }
    })

    if (characterAlreadyExist) throw new Error('Character name already exist!');

    if (!archetypeExist) throw new Error('Archetype does not exist!')

    const experienceRequiredFirstLevel = await prisma.experience.findFirst({
      where: {
        level: 2
      }
    })

    const findAllAttributesId = await prisma.attributes.findMany({
      select: {
        id: true,
        name: true
      }
    });

    const findAllStatusId = await prisma.status.findMany({
      select: {
        id: true,
        name: true
      }
    });

    const allAttributesId = findAllAttributesId.map(attribute => {
      return {
        attribute_name: Object.values(attribute)[1],
        id_attributes: Object.values(attribute)[0],
      }
    })

    const allStatusId = findAllStatusId.map(attribute => {
      return {
        status_name: Object.values(attribute)[1],
        id_status: Object.values(attribute)[0]
      }
    })

    const createCharacter = await prisma.characters.create({
      data: {
        name,
        attribute_points: 0,
        required_experience: experienceRequiredFirstLevel?.required,
        character_attributes: {
          create: allAttributesId
        },
        character_status: {
          create: allStatusId
        },
        character_archetypes: {
          create: {
            archetype_name: archetypeExist.name,
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