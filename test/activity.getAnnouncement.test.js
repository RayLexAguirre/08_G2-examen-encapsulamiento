import Activity from '../src/activity';

test('activity.getAnnouncement()', () => {
  let obj = new Activity(
    'Reunión de inicio',
    new Date(2021, 10, 2),
    new Date(2021, 10, 5),
    15
  );

  expect(obj.getAnnouncement().toLowerCase()).toBe(
    'El evento Reunión de inicio inicia el 2 de Nov del 21 y termina el 5 de Nov del 21 y tiene una duración de 15 horas'.toLowerCase()
  );
});
