import { prisma } from "../../../../database/prismaClient"

interface IUpdateSkill {
  name: string
}

export class UpdateSkillUseCase {
  async execute({ name }: IUpdateSkill) {
    const skillAlreadyExist = await prisma.skills.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    })
    
    console.log('skillAlreadyExist');
    console.log(skillAlreadyExist);
  }
}