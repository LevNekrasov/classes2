/* eslint-disable linebreak-style */

import Swordsman from '../swordsman';

test('Swordsman', () => {
  expect(new Swordsman('Oleg', 'Swordsman')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  });
});
