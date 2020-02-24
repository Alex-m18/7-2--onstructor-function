import Character from '../Character';

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(Character('vasya', 'Bowman')).toEqual(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(Character('vasya', 'Swordsman')).toEqual(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(Character('vasya', 'Magician')).toEqual(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(Character('vasya', 'Undead')).toEqual(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasyavasya',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(Character('vasyavasya', 'Zombie')).toEqual(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'va',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(Character('va', 'Daemon')).toEqual(expected);
});

test('should throw', () => {
  expect(() => Character('v', 'Bowman')).toThrow();
  expect(() => Character('v1234567890', 'Bowman')).toThrow();
  expect(() => Character('vasya', 'Bowman123')).toThrow();
});
