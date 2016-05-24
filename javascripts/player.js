var Gauntlet = (function(Gauntlet){

  /*
    Modularize this code with IIFE or Browserify
   */
  var Gauntlet = Gauntlet || {};
  Gauntlet.Combatants = {};
  var newName = '';
  var newClass = '';
  var newWeapon = '';
  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */

  Gauntlet.playerInfoDiv = function (info) {
    // console.log("this is your friendly neighborhood playerInfoDiv", Gauntlet.myPlayer.health);
    $('#playerName').html("Name: " + Gauntlet.finishPlayer.playerName);
    $('#playerHealth').html("Health: "+ Gauntlet.finishPlayer.health);
    $('#playerRace').html("Race: Human");
    console.log("playerClass", Gauntlet.finishPlayer.class);
    $('#playerClass').html("Class: " + Gauntlet.finishPlayer.class);
    $('#playerWeapon').html("Weapon: " + Gauntlet.finishPlayer.weapon);
  }

  Gauntlet.enemyInfoDiv = function(info) {
    $('#enemyName').html("Name: " + Gauntlet.orc.name);
    $('#enemyHealth').html("Health: " + Gauntlet.orc.health);
    $('#enemyRace').html("Race: Orc");
    $('#enemyClass').html("Class: " + Gauntlet.orc.class.name);
    $('#enemyWeapon').html("Weapon: " + Gauntlet.orc.weapon.name);
  }

  Gauntlet.Combatants.Player = function(name, playerClass, newWeapon) {

    this.species = null;
    this.class = playerClass;
    this.weapon = newWeapon;
    this.damage = 20;
    this.playerName = name || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 50);
    this.limbs = ["head", "neck", "arm", "leg", "torso"];
    this.skinColor = "gray";
    this.skinColors = [this.skinColor];
    this.strength = 90;
    this.intelligence = 90;

    this.toString = function() {
      var output = [this.playerName,
        ": a ",
        this.skinColor,
        " skinned ",
        this.species,
        " ",
        this.class,
        " with ",
        this.health,
        " health. ",
        (this.class.magical) ? "Able to cast " : " Wielding a ",
        this.weapon.toString(),
        "!"
      ].join("");
      console.log('the output', output);
      return output;
    };

  };
  console.log('player', Gauntlet.Combatants.Player);

  $('#player-name').change(function (e) {
    newName = e.target.value;
  });

  $('.class__link').click(function (e) {
    if ($(e.target).parent().find(".btn__text")[0].innerText === "surprise me") {
      var classArray = ["Warrior", "Valkyrie", "Berserker", "Monk", "Wizard", "Sorcerer", "Conjurer", "Thief", "Ninja", "Assassin"];
      var randomNumber = Math.round(Math.random() * (classArray.length - 1));
      console.log("randomclass", classArray[randomNumber]);
      newClass = classArray[randomNumber];
    } else {
    newClass = $(e.target).parent().find(".btn__text")[0].innerText;
    }
  });

  $('.weapon__link').click(function (e) {
    newWeapon = $(e.target).parent().find(".btn__text")[0].innerText;
    Gauntlet.finishPlayer = new Gauntlet.Combatants.Player(newName, newClass, newWeapon);
  });

  Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  }

  Gauntlet.Combatants.Player.prototype.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();

    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  };

  /*
    Define the base properties for a human in a
    constructor function.
   */
  Gauntlet.Combatants.Human = function() {
    var randomSkin;

    this.species = "Human";
    this.intelligence = this.intelligence + 20;

    this.skinColors.push("brown", "red", "white", "disease");
    randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];

    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  };
  Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();


  /*
    Define the base properties for a monster in a
    constructor function.
   */
  Gauntlet.Combatants.Monster = function() {
    this.health = this.health - 30;
    this.intelligence = this.intelligence -20;
    this.strength = this.strength + 30;
  };

  Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

  return Gauntlet

}(Gauntlet || {}));
