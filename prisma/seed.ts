import { prisma } from "../src/database/prismaClient";

import defaultArchetypes from "../src/modules/archetypes/mock";
import defaultAttributes from "../src/modules/attributes/mock";
import defaultSkills from "../src/modules/skills/mock";
import defaultStatus from "../src/modules/status/mock";
import defaultExperience from "../src/modules/characters/mock"
import defaultMonsters from "../src/modules/monsters/mock"

async function SeedDatabase() {
  defaultMonsters.map(async monster => {
    await prisma.monsters.upsert({
      where: {
        name: monster.name
      },
      update: {
        name: monster.name,
        category: monster.category,
        level: monster.level,
        attack: monster.attack,
        defense: monster.defense
      },
      create: {
        name: monster.name,
        category: monster.category,
        level: monster.level,
        attack: monster.attack,
        defense: monster.defense
      }
    })
  })

  defaultArchetypes.map(async archetype => {
    await prisma.archetypes.upsert({
      where: {
        name: archetype.name
      },
      update: {
        name: archetype.name,
        description: archetype.description,
      },
      create: {
        name: archetype.name,
        description: archetype.description,
      }
    })
  })

  defaultSkills.map(async skill => {
    await prisma.skills.upsert({
      where: {
        name: skill.name,
      },
      update: {
        name: skill.name,
        description: skill.description,
        type: skill.type,
        archetypes: {
          connectOrCreate: {
            where: {
              name: skill.archetype
            },
            create: {
              name: skill.archetype,
            }
          }
        }
      },
      create: {
        name: skill.name,
        description: skill.description,
        type: skill.type,
        archetypes: {
          connectOrCreate: {
            where: {
              name: skill.archetype
            },
            create: {
              name: skill.archetype,
            }
          }
        }
      }
    })
  })

  defaultStatus.map(async status => {
    await prisma.status.upsert({
      where: {
        name: status.name
      },
      update: {
        name: status.name
      },
      create: {
        name: status.name,
      }
    })
  })

  defaultAttributes.map(async attribute => {
    await prisma.attributes.upsert({
      where: {
        name: attribute.name
      },
      update: {
        name: attribute.name,
        description: attribute.description
      },
      create: {
        name: attribute.name,
        description: attribute.description
      }
    })
  })

  defaultExperience.map(async experience => {
    await prisma.experience.create({
      data: {
        level: experience.level,
        required: experience.required
      }
    })
  })
}

SeedDatabase()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })