import Activity from '../src/activity';

test('activity.getDays()', () => {
  let obj = new Activity(
    'Reunión de inicio',
    new Date(2021, 1, 2),
    new Date(2021, 1, 5),
    15
  );

  expect(obj.getDays()).toBe(3);
});
