import { prisma } from "../../../database/prismaClient"

interface IUpdateStatus {
  id: string
}

export class UpdateStatusUseCase {
  async execute({id}: IUpdateStatus) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id,
      },
      select: {
        character_status: {
          select: {
            status: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })

    console.log('characterExist')
    console.log(characterExist?.character_status)

    return characterExist
  }
}