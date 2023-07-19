/* eslint-disable linebreak-style */

import Bowerman from '../bowerman';

test('Bowerman', () => {
  expect(new Bowerman('Oleg', 'Bowerman')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Bowerman',
    attack: 25,
    defence: 25,
  });
});
