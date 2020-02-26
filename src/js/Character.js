function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new Error('Error in Character: wrong name length');
  }
  if (!Character.getAvailableTypeNames().includes(type)) {
    throw new Error('Error in Character: wrong type');
  }

  this.name = name;
  this.type = type;
  this.level = 1;
  this.health = 100;
  this.attack = Character.types.filter((value) => value.typeName === type)[0].attack;
  this.defence = Character.types.filter((value) => value.typeName === type)[0].defence;
}

Character.types = [
  {
    typeName: 'Bowman',
    attack: 25,
    defence: 25,
  },
  {
    typeName: 'Swordsman',
    attack: 40,
    defence: 10,
  },
  {
    typeName: 'Magician',
    attack: 10,
    defence: 40,
  },
  {
    typeName: 'Undead',
    attack: 25,
    defence: 25,
  },
  {
    typeName: 'Zombie',
    attack: 40,
    defence: 10,
  },
  {
    typeName: 'Daemon',
    attack: 10,
    defence: 40,
  },
];

Character.getAvailableTypeNames = () => Character.types.map((type) => type.typeName);

export default Character;
