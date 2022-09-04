import Activity from '../src/activity';

test('activity.addParticipant()', () => {
  let obj = new Activity(
    'Reunión de inicio',
    new Date(2021, 10, 2),
    new Date(2021, 10, 5),
    15
  );

  obj.addParticipant('Juan');
  expect(obj._participants[0]).toBe('Juan');

  obj.addParticipant('Pedro');
  expect(obj._participants[1]).toBe('Pedro');

  obj.addParticipant('María');
  expect(obj._participants[2]).toBe('María');
});
