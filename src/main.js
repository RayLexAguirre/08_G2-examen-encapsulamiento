import Activity from './activity.js';

let a1 = new Activity('Reunión de inicio', new Date(2021, 1, 2), new Date(2021, 1, 5), 15);

console.log(a1.getDays());
console.log(a1.getAnnouncement());
