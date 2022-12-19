export default function sortHeroesByHealth(heroes) {
  return heroes
    .map((hero) => hero)
    .sort((hero1, hero2) => hero2.health - hero1.health);
}
