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

    console.log('characterAlreadyExist');
    console.log(characterAlreadyExist);

    if (characterAlreadyExist) throw new Error('Character name already exist!');

    const createCharacter = await prisma.characters.create({
      data: {
        name,
      }
    });

    return createCharacter;
  }
}