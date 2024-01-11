import { prisma } from "../../../database/prismaClient"

interface IUpdateStatus {
  id: string
}

export class UpdateStatusUseCase {
  async execute({ id }: IUpdateStatus) {
    const character = await prisma.characters.findFirst({
      where: {
        id,
      },
      select: {
        level: true,
        character_status: {
          select: {
            id: true,
            status_name: true,
            status_value: true,
          }
        },
        character_attributes: {
          select: {
            id: true,
            attribute_name: true,
            attribute_value: true
          }
        }
      }
    })

    if (!character) throw new Error('Character does not exist or was not found');

    const characterStatus = character.character_status;
    const characterAttributes = character.character_attributes;

    const LEVEL = character.level;
    const DEXTERITY = characterAttributes[0].attribute_value;
    const WISDOM = characterAttributes[1].attribute_value;
    const INTELLIGENCE = characterAttributes[2].attribute_value;
    const MIGHT = characterAttributes[3].attribute_value;

    const updateCharacterStatus = await prisma.characters.update({
      where: {
        id
      },
      data: {
        character_status: {
          update: [
            {
              where: {
                status_name: "SPELL_POWER"
              },
              data: {
                status_value: ((INTELLIGENCE * 0.5) + (LEVEL * 1))
              }
            },
            {
              where: {
                status_name: "WEAPON_POWER"
              },
              data: {
                status_value: ((MIGHT * 0.5) + (LEVEL * 1))
              }
            },
            {
              where: {
                status_name: "SPELL_DEFENSE"
              },
              data: {
                status_value: ((WISDOM * 0.5) + (LEVEL * 1))
              }
            },
            {
              where: {
                status_name: "WEAPON_DEFENSE"
              },
              data: {
                status_value: ((DEXTERITY * 0.5) + (LEVEL * 1))
              }
            },
            {
              where: {
                status_name: "HEAL_POWER"
              },
              data: {
                status_value: ((INTELLIGENCE * 0.5) + (LEVEL * 1))
              }
            },
            {
              where: {
                status_name: "MAXIMUM_HEALTH"
              },
              data: {
                status_value: ((MIGHT * 10) + (LEVEL * 80))
              }
            },
            {
              where: {
                status_name: "MAXIMUM_MANA"
              },
              data: {
                status_value: ((INTELLIGENCE * 10) + (LEVEL * 30))
              }
            },
          ]
        },
      }
    })

    return updateCharacterStatus
  }
}