/* eslint-disable linebreak-style */

import Magician from '../magician';

test('Magician', () => {
  expect(new Magician('Oleg', 'Magician')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Magician',
    attack: 10,
    defence: 40,
  });
});
