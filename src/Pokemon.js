class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = '|';

    for (let i = 1; i <= data.types.length; i++) {
      this.type = this.type.concat(' ', data.types[i-1].type.name, ' |');
    }
  }
}

export default Pokemon;