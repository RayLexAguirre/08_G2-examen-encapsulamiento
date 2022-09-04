import Activity from '../src/activity';

test('activity.getNumParticipants()', () => {
  let obj = new Activity(
    'Reunión de inicio',
    new Date(2021, 10, 2),
    new Date(2021, 10, 5),
    15
  );

  obj._participants = ['Juan', 'Pedro', 'María'];
  expect(obj.getNumParticipants()).toBe(3);
});
