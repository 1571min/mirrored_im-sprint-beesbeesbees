require("mocha");
const chai = require("chai");
const expect = chai.expect;
const RetiredForagerBee = require("../../src/es6/RetiredForagerBee");

describe("retiredForagerBee class functionality", () => {
  var retiredForagerBee;

  beforeEach(() => (retiredForagerBee = new RetiredForagerBee()));

  /*  Overwrite methods from superclass  */

  it("should have an `age` property that is set to `40`", () => {
    expect(retiredForagerBee.age).to.equal(40);
  });

  it("should have a `job` property that is set to `gamble`", () => {
    expect(retiredForagerBee.job).to.equal("gamble");
  });

  /*  Inherited from superclass  */

  it("should have a `color` property inherited from `bee` that is set to `grey`", () => {
    expect(retiredForagerBee.color).to.equal("grey");
  });

  it("should have a `food` property that is inherited from grub", () => {
    expect(retiredForagerBee.food).to.equal("jelly");
  });

  it("should have an `eat` method that is inherited from grub", () => {
    expect(retiredForagerBee.eat).to.be.a("function");
  });

  /*  New methods and properties  */

  it("should have a `canFly` property that is set `false`", () => {
    expect(retiredForagerBee.canFly).to.equal(false);
  });

  it("should have a `treasureChest` property that is set to an empty array `[]`", () => {
    expect(retiredForagerBee.treasureChest).to.be.a("array");
  });

  it("should have a `gamble` method that allows the bee to add a `treasure` to the `treasureChest`", () => {
    retiredForagerBee.gamble("pollen");
    retiredForagerBee.gamble("flowers");
    retiredForagerBee.gamble("gold");
    expect(retiredForagerBee.treasureChest).to.have.length(3);
  });
});
