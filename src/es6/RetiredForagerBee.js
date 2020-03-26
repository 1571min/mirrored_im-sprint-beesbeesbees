const ForagerBee = require("./ForagerBee");

class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor() {
    super();
    this.age = 40;
    this.color = "grey";
    this.job = "gamble";
    this.canFly = false;
    this.treasureChest = [];
  }
  gamble() {
    this.treasureChest.push("treasure");
  }
}

module.exports = RetiredForagerBee;
