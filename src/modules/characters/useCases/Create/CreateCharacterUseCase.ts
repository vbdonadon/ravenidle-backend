import { prisma } from "../../../../database/prismaClient"

interface ICreateCharacter {
  name: string
}

export class CreateCharacterUseCase {
  async execute({ name }:ICreateCharacter) {
    const characterAlreadyExist = await prisma.characters.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    });

    if (characterAlreadyExist) throw new Error('Character name already exist!');

    const createCharacter = await prisma.characters.create({
      data: {
        name,
        character_attributes: {
          create: [
            { id_attributes: '3479f584-f747-4c37-8149-8e29eca25e27' },
            { id_attributes: '6ba8af55-1a12-4b72-bb4d-4a95a71de2a0' },
            { id_attributes: 'd8f34740-a9be-4994-8ece-7933f8f035fb' },
            { id_attributes: 'ee58c1bc-4505-4d8c-b43a-daadccaa90c7' }
          ]
        },
        character_status: {
          create: [
            { id_status: '07ff7d64-51a6-448d-8628-0bc338e887fb' },
            { id_status: '2071b02f-2c8a-426a-9b8a-266c2034885f' },
            { id_status: '252b2a3b-2edb-4339-b7d3-56d7808a303e' },
            { id_status: '2fa15509-facc-46be-b918-5f2ab0b76fae' },
            { id_status: '40480723-4f85-4bba-afbc-a8e3665ad640' },
            { id_status: '73f83bd4-b43d-4c15-832e-1476775c97d7' },
            { id_status: 'a047ae51-6125-4d38-bc11-9da7d846d068' },
            { id_status: 'c9507054-1ac5-4ef6-9bf3-16273c2f849e' },
            { id_status: 'cd94f8d7-80c5-47c2-8e1b-ab5dfdbb8f92' },
            { id_status: 'd2e98858-b2e3-491d-8cbf-8144120aeead' },
            { id_status: 'de0d281c-77e3-406b-a8fb-aac53b38ba73' },
          ]
        }
      }
    });

    return createCharacter;
  }
}