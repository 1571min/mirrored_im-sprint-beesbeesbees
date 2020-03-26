var Grub = require('./Grub');

var Bee = function() {
  // Grub.apply(this, arguments);
  // this.food = this.food;
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
// Bee.prototype.color = 'yellow';
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
module.exports = Bee;
