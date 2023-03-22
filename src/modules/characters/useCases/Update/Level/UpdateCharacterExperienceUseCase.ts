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
    const characterNewLevel = experienceTable.find(value => value.required >= characterNewCurrentExperience);

    const characterNewCurrentLevel = characterNewLevel && (characterNewLevel?.level - 1) || characterCurrentLevel
    const differenceOfLevel = characterNewLevel && (characterNewLevel?.level - characterCurrentLevel) || 0

    console.log(`characterExist`)
    console.log(characterExist)
    console.log(``)
    console.log(`characterCurrentExperience`)
    console.log(characterCurrentExperience)
    console.log(``)
    console.log(`characterNewCurrentExperience`)
    console.log(characterNewCurrentExperience)
    console.log(``)
    console.log(`characterCurrentLevel`)
    console.log(characterCurrentLevel)
    console.log(``)
    console.log(`characterCurrentAttribute`)
    console.log(characterCurrentAttribute)
    console.log(``)
    console.log(`characterNewLevel`)
    console.log(characterNewLevel)
    console.log(``)
    console.log(`differenceOfLevel`)
    console.log(differenceOfLevel)


    const updateCharacterExperience = await prisma.characters.update({
      where: {
        id
      },
      data: {
        level: characterNewCurrentLevel,
        current_experience: characterNewCurrentExperience,
        required_experience: characterNewLevel?.required,
        // attribute_points: characterCurrentAttribute + differenceOfLevel
      }
    })

    return updateCharacterExperience
  }
}