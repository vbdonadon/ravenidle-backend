// import { prisma } from "../../../../database/prismaClient"

// interface ICreateArchetype {
//   name: string
// }

// export class CreateArchetypeUseCase {
//   async execute({ name }: ICreateArchetype) {
//     const archetypeAlreadyExist = await prisma.archetypes.findFirst({
//       where: {
//         name: {
//           equals: name,
//           mode: "insensitive"
//         }
//       }
//     })
    
//     if (archetypeAlreadyExist) throw new Error('Archetype already exist!');
    
//   }
// }