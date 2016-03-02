/*
  Define the base properties for a human in a 
  constructor function.
 */
var Human = function(name) {
  this.species = "Human";
  this.playerName = name;
  this.intelligence = this.intelligence + 20;
  this.skinColors.push("brown", "red", "white", "disease");

  /*
    Define the classes allowed for Humans
   */
  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  this.allowedClasses.push("Wizard", "Conjurer", "Sorcerer");
  this.allowedClasses.push("Thief", "Ninja");

  // console.log("Human constructor function");
};

// console.log("");
// console.log("Human set Player as prototype");
Human.prototype = new Player();

