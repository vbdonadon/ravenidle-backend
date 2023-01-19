import { prisma } from "../../../../database/prismaClient"

interface IUpdateStatus {
  name: string
}

export class UpdateStatusUseCase {
  async execute({ name }: IUpdateStatus) {
    const statusAlreadyExist = await prisma.status.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    })

    console.log('statusAlreadyExist')
    console.log(statusAlreadyExist)

    if (statusAlreadyExist) throw new Error('Status already exist!')

    const updateStatus = await prisma.status.create({
      data: {
        name
      }
    })

    return updateStatus;
  }
}