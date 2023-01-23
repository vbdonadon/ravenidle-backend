import { prisma } from "../src/database/prismaClient";

import defaultArchetypes from "../src/modules/archetypes/mock";
import defaultAttributes from "../src/modules/attributes/mock";
import defaultSkills from "../src/modules/skills/mock";
import defaultStatus from "../src/modules/status/mock";

async function SeedDatabase() {
  defaultArchetypes.map(async archetype => {
    await prisma.archetypes.upsert({
      where: {
        name: archetype.name
      },
      update: {
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
        value: status.value
      },
      create: {
        name: status.name,
        value: status.value
      }
    })
  })

  defaultAttributes.map(async attribute => {
    await prisma.attributes.upsert({
      where: {
        name: attribute.name
      },
      update: {},
      create: {
        name: attribute.name,
        description: attribute.description
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