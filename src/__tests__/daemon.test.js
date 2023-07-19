/* eslint-disable linebreak-style */

import Daemon from '../daemon';

test('Daemon', () => {
  expect(new Daemon('Oleg', 'Daemon')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  });
});
