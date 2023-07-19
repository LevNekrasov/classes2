/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import Zombie from '../zombie';
import Daemon from '../daemon';

test('Zombie', () => {
  expect(() => {
    const result = new Zombie('O', 'Zombie');
  }).toThrow('Неверно передано имя персонажа');
});

test('Zombie', () => {
  expect(() => {
    const result = new Zombie('Oleg', 'Human');
  }).toThrow('Неверно передан тип персонажа');
});

test('levelUp', () => {
  const result = new Daemon('Oleg', 'Daemon');
  result.livelUp();
  expect(result).toEqual({
    name: 'Oleg',
    health: 100,
    level: 2,
    type: 'Daemon',
    attack: 12,
    defence: 48,
  });
});

test('levelUp error', () => {
  const result = new Daemon('Oleg', 'Daemon');
  result.health = 0;
  expect(() => {
    result.livelUp();
  }).toThrow('нельзя повысить уровень умершего');
});

test('damage', () => {
  const result = new Daemon('Oleg', 'Daemon');
  result.damage(30);
  expect(result).toEqual({
    name: 'Oleg',
    health: 82,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  });
});

test('damage error', () => {
  const result = new Daemon('Oleg', 'Daemon');
  result.health = 0;
  expect(() => {
    result.damage();
  }).toThrow('персонаж и так уже мёртв');
});
