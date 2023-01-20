import { prisma } from "../../../../database/prismaClient";

export class FindAllCharacterUseCase {
  async execute() {
    const findAllCharacter = await prisma.characters.findMany({
      select: {
        id: true,
        name: true,
        character_attributes: {
          select: {
            attribute_value: true,
            attributes: true
          },
        },
        character_status: {
          select: {
            status_value: true,
            status: true
          }
        },
        character_archetypes: {
          select: {
            archetypes: true
          }
        }
      },
    });

    return findAllCharacter;
  }
}