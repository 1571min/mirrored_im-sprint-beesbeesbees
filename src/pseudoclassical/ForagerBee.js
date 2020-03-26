var Bee = require('./Bee');

var ForagerBee = function() {
  Bee.apply(this, arguments);
  this.age = 10;
  this.job = 'find pollen';
  this.color = this.color;
  this.canFly = true;
  this.treasureChest = [];
  // this.forage = function() {
  //   this.treasureChest.push('treasure');
  // };
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
};

module.exports = ForagerBee;
