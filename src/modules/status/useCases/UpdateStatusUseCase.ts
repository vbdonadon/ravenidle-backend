import { prisma } from "../../../database/prismaClient"

interface IUpdateStatus {
  id: string
  id_status: string;
  id_value: string;
}


export class UpdateStatusUseCase {
  async execute({ id }: IUpdateStatus) {
    const character = await prisma.characters.findFirst({
      where: {
        id,
      },
      select: {
        character_status: {
          select: {
            id: true,
            status_value: true,
          }
        },
        character_attributes: {
          select: {
            id: true,
            attribute_value: true
          }
        }
      }
    })

    if (!character) throw new Error('Character does not exist or was not found');

    const characterStatus = character.character_status;
    const characterAttributes = character.character_attributes;

    // if (characterAttributes.)

    // console.log('character')
    // console.log(character)

    // console.log('characterStatusId')
    // console.log(characterStatusId)

    // console.log('characterAttributes')
    // console.log(characterAttributes)

    // const updateCharacterStatus = await prisma.characters.update({
    //   where: {
    //     id
    //   },
    //   data: {
    //     character_status: {
    //       update: {
    //         where: ,
    //         data: {
    //           status_value: 1
    //         }
    //       }
    //     }
    //   }
    // })

    return character
  }
}