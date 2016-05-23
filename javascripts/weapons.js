var Gauntlet = (function(gauntlet){

  gauntlet.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    }
  };

  gauntlet.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
    this.hands = 1;
  };
  gauntlet.Dagger.prototype = new gauntlet.Weapon();

  gauntlet.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
    this.hands = 2;
  };
  gauntlet.BroadSword.prototype = new gauntlet.Weapon();

  gauntlet.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
    this.hands = 2;
  };
  gauntlet.WarAxe.prototype = new gauntlet.Weapon();

  return gauntlet

}(Gauntlet || {}));
