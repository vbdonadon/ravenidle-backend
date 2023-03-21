import { prisma } from "../../../../database/prismaClient";

interface IUpdateCharacterExperience {
  id: string;
  experience: number;
}

export class UpdateCharacterExperienceUseCase {
  async execute({ id, experience }: IUpdateCharacterExperience) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      }
    })

    if (!characterExist) throw new Error('Character does not exist or was not found');

    const characterExperience = await prisma.characters.update({
      where: {
        id
      },
      data: {
        experience: experience
      }
    })

    console.log("Character");
    console.log(characterExperience);

    // const updateExperience = await prisma.experience.findFirst({
    //   where: {
    //     required:
    //   }
    // })

    return characterExperience
  }
}