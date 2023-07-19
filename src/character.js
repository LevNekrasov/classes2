/* eslint-disable linebreak-style */
/* eslint-disable no-empty */

export default class Character {
  constructor(name, type) {
    const gameType = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Неверно передано имя персонажа');
    }
    if (!gameType.includes(type)) {
      throw new Error('Неверно передан тип персонажа');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    this.type = type;
  }

  livelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('персонаж и так уже мёртв');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
