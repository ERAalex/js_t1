import Character from '../src/characterTypes'
import Zombie from '../src/characterTypes'
import Undead from '../src/characterTypes'

test('Character check function exists levelUp()', () => {
  const characterOne = new Character('Samuel');
  expect(typeof characterOne.levelUp).toBe('function');
});

test('Character wrong name', () => {
  expect(() => new Character('a')).toThrow('Invalid date - name')
});

test('Zombie check levelUp()', () => {
  const characterOne = new Zombie('Samuel');
  characterOne.levelUp()
  expect(characterOne.level).toBe(2);
});

test('Undead check levelUp() with healt = 0', () => {
  const characterThree = new Undead('KimKiDuk');
  characterThree.health = 0
  expect(() => characterThree.levelUp()).toThrow('You are dead! No chance you can levelUP :D')
});
