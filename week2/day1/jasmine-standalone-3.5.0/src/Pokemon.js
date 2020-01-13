class Pokemon {
  constructor(name, attack) {
    this.name = name;
    this.hp = 100;
    this.attack = attack;
  }
  attacks(pokemon) {
    pokemon.hp -= this.attack;
  }
  // attack(pokemon){
  //   pokemon.receiveDamage(this.attack)
  // }
  // receiveDamage(damage){
  //   this.hp -= damage
  // }
}

class Electric extends Pokemon {
  constructor(name, attack) {
    super(name, attack);
    this.type = "Electric";
  }
}
