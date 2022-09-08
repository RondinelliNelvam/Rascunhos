class Teste {
  constructor(name, age, city) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
}
class Testando2 extends Teste {
  constructor(name, city, age) {
    super("algo2", city, age);
    console.log(this);
  }
}
class Testando extends Teste {
  constructor(name, city, age) {
    super();
    console.log(this);
    this.name = "algo";
    this.city = city;
    this.age = age;
    console.log(this);
  }
}

const a = new Testando("", "city", 20);
const b = new Testando2("", "city2", 22);
