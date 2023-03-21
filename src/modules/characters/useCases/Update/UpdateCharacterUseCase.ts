import { prisma } from "../../../../database/prismaClient";

interface IAttribute {
  id: string;
  value: number;
}

interface IUpdateCharacter {
  id: string;
  level?: number;
  available_points: number;
  attributes: IAttribute[];
}

export class UpdateCharacterUseCase {
  async execute({ id, level, attributes, available_points }: IUpdateCharacter) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      },
      select: {
        name: true,
        level: true,
        created_at: true,
        character_attributes: {
          select: {
            attribute_value: true,
            attributes: true
          }
        },
        character_status: {
          select: {
            status_value: true,
            status: true
          }
         }
      }
    })

    if (!characterExist) throw new Error('Character does not exist or was not found');

    const characterAttributes = attributes.map(async attribute => {
      return await prisma.characters.update({
        where: {
          id
        },
        data: {
          level: level,
          character_attributes: {
            update: {
              where: {
                id: attribute.id
              },
              data: {
                attribute_value: attribute.value
              }
            }
          },
        }
      })
    })

    return characterAttributes;
  }
}