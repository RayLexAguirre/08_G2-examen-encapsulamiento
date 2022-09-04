import Activity from '../src/activity';

test('activity.encapsulation()', () => {
  let obj = new Activity(
    'Reunión de inicio',
    new Date(2021, 1, 2),
    new Date(2021, 1, 5),
    15
  );

  expect(typeof obj.getName).toBe('function');
  expect(typeof obj.setName).toBe('function');

  expect(typeof obj.getStartDate).toBe('undefined');
  expect(typeof obj.setStartDate).toBe('function');

  expect(typeof obj.getEndDate).toBe('undefined');
  expect(typeof obj.setEndDate).toBe('function');

  expect(typeof obj.getDuration).toBe('function');
  expect(typeof obj.setDuration).toBe('undefined');

  expect(typeof obj.getParticipants).toBe('undefined');
  expect(typeof obj.setParticipants).toBe('undefined');

  expect(obj.getName()).toBe('Reunión de inicio');

  obj.setName('Reunión de fin');
  expect(obj.getName()).toBe('Reunión de fin');

  obj.setStartDate(new Date(1999, 3, 10));
  expect(obj._startDate.getFullYear()).toBe(1999);

  obj.setEndDate(new Date(2000, 3, 10));
  expect(obj._endDate.getFullYear()).toBe(2000);

  expect(obj.getDuration()).toBe(15);
});
