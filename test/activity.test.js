import Activity from '../src/activity';

test('activity.constructor()', () => {
  let obj = new Activity(
    'Reunión de inicio',
    new Date(2021, 1, 2),
    new Date(2021, 1, 5),
    15
  );

  expect(obj._name).toBe('Reunión de inicio');
  expect(obj._startDate.getFullYear()).toBe(2021);
  expect(obj._endDate.getFullYear()).toBe(2021);
  expect(obj._duration).toBe(15);
  expect(obj._participants.length).toBe(0);
});
