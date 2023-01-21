import { prisma } from "../../../../../database/prismaClient";

interface IAttribute {
  id: string;
  value: number;
}

interface IUpdateAttribute {
  id: string;
  id_attribute: string;
  attribute_value: number;
}

export class UpdateAttributeUseCase {
  async execute({ id, id_attribute, attribute_value }: IUpdateAttribute) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      }
    })

    if (!characterExist) throw new Error('Character does not exist or was not found');

    // attributes.map(async attribute => {
    //   await prisma.characters.update({
    //     where: {
    //       id
    //     },
    //     data: {
    //       character_attributes: {
    //         update: {
    //           where: {
    //             id: attribute.id
    //           },
    //           data: {
    //             attribute_value: attribute.value
    //           }
    //         }
    //       }
    //     }
    //   })
    // })

    const characterAttribute = await prisma.characters.update({
      where: {
        id
      },
      data: {
        character_attributes: {
          update: {
            where: {
              id: id_attribute
            },
            data: {
              attribute_value,
            }
          }
        }
      }
    })

    return characterAttribute;
  }
}