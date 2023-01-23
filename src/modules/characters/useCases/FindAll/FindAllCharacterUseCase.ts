import { prisma } from "../../../../database/prismaClient";

export class FindAllCharacterUseCase {
  async execute() {
    const findAllCharacter = await prisma.characters.findMany({
      select: {
        id: true,
        name: true,
        level: true,
        character_attributes: {
          select: {
            id: true,
            attribute_value: true,
            attributes: true
          },
        },
        character_status: {
          select: {
            id: true,
            status_value: true,
            status: true
          }
        },
        character_archetypes: {
          select: {
            id: true,
            archetypes: true
          }
        }
      },
    });

    return findAllCharacter;
  }
}