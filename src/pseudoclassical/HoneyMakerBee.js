var Bee = require('./Bee');

var HoneyMakerBee = function() {
  Bee.apply(this, arguments);
  this.color = this.color;
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
  this.makeHoney = function() {
    this.honeyPot += 1;
  };
  this.giveHoney = function() {
    this.honeyPot -= 1;
  };
};

// HoneyMakerBee.prototype.color = this.color;

HoneyMakerBee.prototype = Object.create(Bee.prototype);
//console.log(HoneyMakerBee.prototype.constructor);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// HoneyMakerBee.prototype.makeHoney = function() {
//   this.honeyPot += 1;
// };
// HoneyMakerBee.prototype.giveHoney = function() {
//   this.honeyPot -= 1;
// };

module.exports = HoneyMakerBee;
