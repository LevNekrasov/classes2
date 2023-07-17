/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import Character from './character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
