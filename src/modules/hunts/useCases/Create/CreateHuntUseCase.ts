import { prisma } from "../../../../database/prismaClient";


interface ICreateHunt {
  id_character: string
  id_monster: string
}

export class CreateHuntUseCase {
  async execute({ id_character, id_monster }: ICreateHunt) {
    const character = await prisma.characters.findFirst({
      where: {
        id: id_character
      },
    })

    if (!character) throw new Error('Character does not exist or was not found');

    const monster = await prisma.monsters.findFirst({
      where: {
        id: id_monster
      }
    })

    if (!monster) throw new Error('Monster does not exist or was not found');

    const characterStatus = await prisma.characterStatus.findMany({
      where: {
        id_character
      }
    })

    // function startAutoHunt() {
    //   const huntInterval = 1000 * 60 * 60; // 1 hora em milissegundos

    //   const huntTimer = setInterval(() => {
    //     // Simular ataque do jogador
    //     const damageToMonster = Math.max(0, player.attack - monster.defense);
    //     monster.health -= damageToMonster;

    //     // Verificar se o monstro ainda está vivo
    //     if (monster.health <= 0) {
    //       clearInterval(huntTimer);
    //       io.emit('battleResult', { result: 'playerWins', player, monster });
    //     } else {
    //       // Se o monstro ainda estiver vivo, é a vez do monstro atacar
    //       const damageToPlayer = Math.max(0, monster.attack - player.defense);
    //       player.health -= damageToPlayer;

    //       // Verificar se o jogador ainda está vivo
    //       if (player.health <= 0) {
    //         clearInterval(huntTimer);
    //         io.emit('battleResult', { result: 'monsterWins', player, monster });
    //       } else {
    //         // Se ambos estão vivos, enviar atualizações para os clientes
    //         io.emit('battleUpdate', { player, monster });
    //       }
    //     }
    //   }, huntInterval);
    // }

    const Battle = () => {
      const huntInterval = 1000 * 60 * 60; // 1 hora em milissegundos

      const huntTimer = setInterval(() => {
        console.log("In Hunt")
      }, huntInterval)

      let PLAYER_LIFE = characterStatus.filter(status => status.status_name == 'MAXIMUM_HEALTH')[0].status_value;
      let PLAYER_ATTACK = characterStatus.filter(status => status.status_name == 'WEAPON_POWER')[0].status_value;

      let MONSTER_LIFE = characterStatus.filter(status => status.status_name == 'MAXIMUM_HEALTH')[0].status_value;
      let MONSTER_ATTACK = characterStatus.filter(status => status.status_name == 'WEAPON_POWER')[0].status_value;
      // const LIFE = characterStatus.filter(status => status.status_name == 'MAXIMUM_HEALTH');
      // const MANA = characterStatus.filter(status => status.status_name == 'MAXIMUM_MANA');
      // const LIFE = characterStatus.filter(status => status.status_name == 'MAXIMUM_HEALTH');
      // const MANA = characterStatus.filter(status => status.status_name == 'MAXIMUM_MANA');


      // console.log(character);
      // console.log(characterStatus);
      // console.log(monster);

      // console.log('PLAYER_LIFE')
      // console.log(PLAYER_LIFE)

      // console.log('MONSTER LIFE')
      // console.log(MONSTER_LIFE)

      if (Number(PLAYER_LIFE) >= 0) {
        console.log('Player still alive');

        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];

        // }
      }
    };

    Battle();

    return character
  }
}