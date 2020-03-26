var Grub = function() {
  this.age = 0;
  this.color = 'pink';
};
Grub.prototype.eat = function() {
  return 'Mmmmmmmmm jelly';
};
Grub.prototype.food = 'jelly';
// Grub.prototype.food = 'jelly';
module.exports = Grub;
