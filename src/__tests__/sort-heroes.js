import sortHeroesByHealth from '../sort-heroes';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'рыцарь', health: 50 },
];

const sortedHeroes = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'рыцарь', health: 50 },
  { name: 'мечник', health: 10 },
];

test('sorting heroes by health', () => {
  const result = sortHeroesByHealth(heroes);
  expect(result).toEqual(sortedHeroes);
});
