import { prisma } from "../../../../../database/prismaClient";

interface IUpdateCharacterExperience {
  id: string;
  experience: number;
}

export class UpdateCharacterExperienceUseCase {
  async execute({ id, experience }: IUpdateCharacterExperience) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      },
      select: {
        name: true,
        level: true,
        attribute_points: true,
        skill_points: true,
        current_experience: true,
        required_experience: true
      }
    })

    if (!characterExist) throw new Error('Character does not exist or was not found');

    const characterCurrentExperience = characterExist.current_experience;
    const characterNewCurrentExperience = characterCurrentExperience + experience;
    const characterCurrentLevel = characterExist.level;
    const characterCurrentAttribute = characterExist.attribute_points;

    const experienceTable = await prisma.experience.findMany();
    const experienceTableSorted = experienceTable.sort(function (a, b) {
      if (a.level > b.level) {
        return 1;
      }
      if (a.level < b.level) {
        return -1;
      }
      return 0;
    });

    const characterNewLevel = experienceTableSorted.find(value => value.required >= characterNewCurrentExperience);
    const differenceOfLevel = characterNewLevel && (characterNewLevel?.level - characterCurrentLevel) || 0

    const updateCharacterExperience = await prisma.characters.update({
      where: {
        id
      },
      data: {
        level: characterNewLevel?.level,
        current_experience: characterNewCurrentExperience,
        required_experience: characterNewLevel?.required,
        attribute_points: characterCurrentAttribute + (differenceOfLevel * 2)
      }
    })

    return updateCharacterExperience
  }
}