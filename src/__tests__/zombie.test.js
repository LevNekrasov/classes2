/* eslint-disable linebreak-style */

import Zombie from '../zombie';

test('Zombie', () => {
  expect(new Zombie('Oleg', 'Zombie')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  });
});
