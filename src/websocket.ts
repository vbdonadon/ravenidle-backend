import { io } from "./http";

const StartBattle = () => {
  const formula = (max: number, min: number) => Math.random() * (max - min) + min;
  const damageFormula = (type: string, attack: number, defense: number) => {
    const damage = formula(attack + (attack * 0.3), attack - (attack * 0.3)) - defense;

    return damage;
  }

  const generateNewMonster = () => {
    monster = {
      health: formula((player.health - player.health * 0.50), player.health),
      attack: formula((player.attack - player.attack * 0.10), player.attack),
      defense: formula((player.defense - player.defense * 0.10), player.defense),
      exp: 60
    }
  }

  let player = {
    health: 100,
    attack: 20,
    defense: 20
  }

  let monster = {
    health: formula((player.health - player.health * 0.50), player.health),
    attack: formula((player.attack - player.attack * 0.10), player.attack),
    defense: formula((player.defense - player.defense * 0.10), player.defense),
    exp: 60
  }

  const huntInterval = 500; // This should be the Global Cooldown
  const huntTimer = setInterval(() => {
    io.emit('battle-update', (param: any) => {
      if (player.health >= 0 && monster.health >= 0) {
        const playerAttack = damageFormula('Player Attacking', player.attack, monster.defense);
        const monsterAttack = damageFormula('Monster Attacking', monster.attack, player.defense);

        if (playerAttack > 0) {
          monster.health = monster.health - playerAttack
        }

        if (monsterAttack > 0) {
          player.health = player.health - monsterAttack
        }

        console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
        console.log(`> Player health: ${player.health}`);
        console.log(`> Player attack: ${player.attack}`);
        console.log(`> Player defense: ${player.defense}`);
        console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
        console.log(`> Monster health: ${monster.health}`);
        console.log(`> Monster attack: ${monster.attack}`);
        console.log(`> Monster defense: ${monster.defense}`);
        console.log('');

        return
      }

      if (monster.health <= 0) {
        generateNewMonster();
      }

      if (player.health <= 0) {
        io.emit('battle-ends', () => {

        })
      }
    })
  }, huntInterval)
}

io.on("connection", (socket) => {
  console.log(`> User connected: ${socket.id}`);

  StartBattle();
})