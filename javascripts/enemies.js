var Gauntlet = (function(Gauntlet){

  Gauntlet.Combatants.Orc = function() {
    this.health = this.health + 20;
    this.species = "Orc";
    this.allowedClasses = ["Warrior", "Berserker", "Monk"];

    var names = ["Garry", "Jeff", "Felix", "Rupert", "Beatrix", "Steve", "Eugene", "Aunt Jemima"];

    this.generateClass = function() {
      // Get a random index from the allowed classes array
      var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

      // Get the string at the index
      var randomClass = this.allowedClasses[random];
      // Composes the corresponding player class into the player object
      this.class = new Gauntlet.GuildHall[randomClass]();
      return this.class;
    }
    this.generateName = function () {
      var random = Math.round(Math.random() * (names.length - 1));
      this.name = names[random];
      return this.name;
    }
  };

  Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();



  return Gauntlet

}(Gauntlet || {}));
