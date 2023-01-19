import { prisma } from "../../../../database/prismaClient"

interface IFindAllAttributes {
  name: string
}

export class FindAllAttributesUseCase {
  async execute({ name }: IFindAllAttributes) {
    const findAllAttributes = await prisma.attributes.findMany({
      where: {
        name,
      }
    });

    return findAllAttributes
  }
}