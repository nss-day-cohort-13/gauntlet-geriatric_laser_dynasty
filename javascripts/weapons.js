var Gauntlet = (function(Gauntlet){

  Gauntlet.Weapon = function() {
    this.name = "Bare Hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    }
  };

  Gauntlet.Dagger = function() {
    this.name = "Dagger";
    this.damage = 4;
    this.hands = 1;
  };
  Gauntlet.Dagger.prototype = new Gauntlet.Weapon();

  Gauntlet.BroadSword = function() {
    this.name = "Broad Sword";
    this.damage = 14;
    this.hands = 2;
  };
  Gauntlet.BroadSword.prototype = new Gauntlet.Weapon();

  Gauntlet.WarAxe = function() {
    this.name = "War Axe";
    this.damage = 18;
    this.hands = 2;
  };
  Gauntlet.WarAxe.prototype = new Gauntlet.Weapon();

  return Gauntlet

}(Gauntlet || {}));
