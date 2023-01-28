import { prisma } from "../../../../database/prismaClient";

interface IDeleteCharacter {
  id: string;
}

export class DeleteCharacterUseCase {
  async execute({ id }: IDeleteCharacter) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      }
    })

    if (!characterExist) throw new Error('Character does not exist or was not found');

    const deleteCharacter = await prisma.characters.delete({
      where: {
        id
      },
    })

    return deleteCharacter
  }
}