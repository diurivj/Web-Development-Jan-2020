describe("Pokemon test", () => {
  var pokemon;
  var raichu;

  beforeEach(() => {
    pokemon = new Pokemon("Pikachu", 2);
    raichu = new Electric("Raichu", 12);
  });

  it("pokemon should be defined", () => {
    expect(pokemon).toBeDefined();
  });
  it("pokemon should be an instance of Pokemon", () => {
    expect(pokemon instanceof Pokemon).toBeTruthy();
  });
  it("Pokemon hp defined", () => {
    expect(pokemon.hp).toBeDefined();
  });
  it("attack is a number", () => {
    expect(typeof pokemon.attack).toEqual("number");
  });

  describe("pokemon of type ...", () => {
    it("pokemon should be an instance of Electric", () => {
      expect(raichu instanceof Electric).toBeTruthy();
    });
  });

  describe("Pokemon battle", () => {
    it("receive damage", () => {
      raichu.attacks(pokemon);
      expect(pokemon.hp).toEqual(88);
    });
  });
});
