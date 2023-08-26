const Team = require('./Team');

describe('Team', () => {
  it('should add a character to the team', () => {
      const team = new Team();
      const character = new Character('Alice');
      team.add(character);
      expect([...team.members]).toEqual([character]);
  });

  it('should not allow duplicate characters in the team', () => {
      const team = new Team();
      const character = new Character('Bob');
      team.add(character);
      expect(() => team.add(character)).toThrowError('Character already exists in the team');
  });

  it('should add multiple characters to the team using addAll method', () => {
      const team = new Team();
      const character1 = new Character('Charlie');
      const character2 = new Character('David');
      team.addAll(character1, character2);
      expect([...team.members]).toEqual([character1, character2]);
  });

  it('should convert the team to an array using toArray method', () => {
      const team = new Team();
      const character1 = new Character('Eve');
      const character2 = new Character('Frank');
      team.addAll(character1, character2);
      expect(team.toArray()).toEqual([character1, character2]);
  });
});