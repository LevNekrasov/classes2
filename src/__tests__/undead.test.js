/* eslint-disable linebreak-style */

import Undead from '../undead';

test('Undead', () => {
  expect(new Undead('Oleg', 'Undead')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 25,
    defence: 25,
  });
});
