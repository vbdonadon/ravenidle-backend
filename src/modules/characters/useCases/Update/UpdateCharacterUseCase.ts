import { prisma } from "../../../../database/prismaClient";

interface IUpdateCharacter {
  id: string;
  level: number;
}

export class UpdateCharacterUseCase {
  async execute({ id, level }: IUpdateCharacter) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      }
    })

    if (!characterExist) throw new Error('Character does not exist or was not found');

    const character = await prisma.characters.update({
      where: {
        id
      },
      data: {
        level
      }
    })

    return character;
  }
}