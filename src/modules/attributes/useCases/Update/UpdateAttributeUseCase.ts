import { prisma } from "../../../../database/prismaClient"

interface IUpdateAttribute {
  name: string
}

export class UpdateAttributeUseCase {
  async execute({ name }: IUpdateAttribute) {
    const nameToLowerCase = name.toLocaleLowerCase();
    
    const attributeAlreadyExist = await prisma.attributes.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    });

    if (attributeAlreadyExist) throw new Error ('Attribute does not exist!');

    const updateAttribute = await prisma.attributes.create({
      data: {
        name: nameToLowerCase
      }
    });

    return updateAttribute;
  }
}