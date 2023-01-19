import { prisma } from "../../../../database/prismaClient"

interface IFindAllStatus {
  name: string
}

export class FindAllStatusUseCase {
  async execute({ name }: IFindAllStatus) {
    const findAllStatus = await prisma.status.findMany({
      where: {
        name,
      }
    });

    return findAllStatus
  }
}