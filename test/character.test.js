import Character from "../src/characterTypes"
import Zombie from "../src/characterTypes"
import Undead from "../src/characterTypes"

test("Character check function exists levelUp()", () => {
  const character_1 = new Character('Samuel');
  expect(typeof character_1.levelUp).toBe("function");
});

test("Character wrong name", () => {
  expect(() => new Character('a')).toThrow('Invalid date - name')
});

test("Zombie check levelUp()", () => {
  const character_2 = new Zombie('Samuel');
  character_2.levelUp()
  expect(character_2.level).toBe(2);
});

test("Undead check levelUp() with healt = 0", () => {
  const character_3 = new Undead('KimKiDuk');
  character_3.health = 0
  expect(() => character_3.levelUp()).toThrow('You are dead! No chance you can levelUP :D')
});
