class Team {
  constructor() {
      this.members = new Set();
  }

  add(character) {
      if (this.members.has(character)) {
          throw new Error('Character already exists in the team');
      }
      this.members.add(character);
  }

  addAll(...characters) {
      characters.forEach(character => this.add(character));
  }

  toArray() {
      return Array.from(this.members);
  }
}

class Character {
  constructor(name) {
      this.name = name;
  }
}