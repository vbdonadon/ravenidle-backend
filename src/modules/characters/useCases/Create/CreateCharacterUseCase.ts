import { prisma } from "../../../../database/prismaClient"

interface ICreateCharacter {
  name: string
}

export class CreateCharacterUseCase {
  async execute({ name }:ICreateCharacter) {
    const characterAlreadyExist = await prisma.characters.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    });

    if (characterAlreadyExist) throw new Error('Character name already exist!');

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
        }
      }
    });

    return createCharacter;
  }
}