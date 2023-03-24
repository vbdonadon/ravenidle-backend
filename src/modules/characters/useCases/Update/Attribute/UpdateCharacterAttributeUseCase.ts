import { prisma } from "../../../../../database/prismaClient";

interface IAttribute {
  name: string;
  value: number;
}

interface IUpdateCharacterAttribute {
  id: string;
  attributes: IAttribute[];
}

export class UpdateCharacterAttributeUseCase {
  async execute({ id, attributes }: IUpdateCharacterAttribute) {
    const characterExist = await prisma.characters.findFirst({
      where: {
        id
      },
      select: {
        name: true,
        attribute_points: true,
        character_attributes: {
          select: {
            attribute_name: true,
            attribute_value: true,
            attributes: true
          }
        },
      }
    })

    if (!characterExist) throw new Error('Character does not exist or was not found!');

    if (!characterExist.attribute_points) throw new Error('Character does not have attribute points!');

    const pointsUsed = attributes.map(value => value.value)
    const sumOfUsedPoints = pointsUsed.reduce((accumulator, currentValue) => accumulator + currentValue);

    if (sumOfUsedPoints > characterExist.attribute_points) throw new Error('Character does not have that many attribute points to use!')

    const CURRENT_MIGHT = characterExist.character_attributes.find(name => name.attribute_name == 'MIGHT')?.attribute_value || 0;
    const CURRENT_DEXTERITY = characterExist.character_attributes.find(name => name.attribute_name == 'DEXTERITY')?.attribute_value || 0;
    const CURRENT_INTELLIGENCE = characterExist.character_attributes.find(name => name.attribute_name == 'INTELLIGENCE')?.attribute_value || 0;
    const CURRENT_WISDOM = characterExist.character_attributes.find(name => name.attribute_name == 'WISDOM')?.attribute_value || 0;

    const characterAttributes = await attributes.map(async attribute => {
      if (attribute.name == 'MIGHT') {
        return await prisma.characters.update({
          where: {
            id
          },
          data: {
            attribute_points: characterExist.attribute_points - sumOfUsedPoints,
            character_attributes: {
              update: {
                where: {
                  attribute_name: 'MIGHT'
                },
                data: {
                  attribute_value: CURRENT_MIGHT + attribute.value
                }
              }
            },
          },
        })
      }

      if (attribute.name == 'DEXTERITY') {
        return await prisma.characters.update({
          where: {
            id
          },
          data: {
            attribute_points: characterExist.attribute_points - sumOfUsedPoints,
            character_attributes: {
              update: {
                where: {
                  attribute_name: 'DEXTERITY'
                },
                data: {
                  attribute_value: CURRENT_DEXTERITY + attribute.value
                }
              }
            },
          },
        })
      }

      if (attribute.name == 'INTELLIGENCE') {
        return await prisma.characters.update({
          where: {
            id
          },
          data: {
            attribute_points: characterExist.attribute_points - sumOfUsedPoints,
            character_attributes: {
              update: {
                where: {
                  attribute_name: 'INTELLIGENCE'
                },
                data: {
                  attribute_value: CURRENT_INTELLIGENCE + attribute.value
                }
              }
            },
          },
        })
      }

      if (attribute.name == 'WISDOM') {
        return await prisma.characters.update({
          where: {
            id
          },
          data: {
            attribute_points: characterExist.attribute_points - sumOfUsedPoints,
            character_attributes: {
              update: {
                where: {
                  attribute_name: 'WISDOM'
                },
                data: {
                  attribute_value: CURRENT_WISDOM + attribute.value
                }
              }
            },
          },
        })
      }
    })

    return characterAttributes;
  }
}