class Teste {
  constructor(name, age, city) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
  Teste() {
    return con;
  }
}

class Testando extends Teste {
  constructor(name, city, age) {
    super("Algo", this.city, this.age);
  }
}

const a = new Testando("Teste", 20, "algo");
console.log(a);
