class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName() {
    console.log(this.heroName);
  }
}

const batman = new Hero('Batman');

setTimeout(batman.logName.bind(batman), 3000);
// after 1 second logs "Batman"