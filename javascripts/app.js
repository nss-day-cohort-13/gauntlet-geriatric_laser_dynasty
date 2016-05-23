var Gauntlet = (function(gauntlet){

  /*
    Test code to generate a human player and an orc player
  */
  var warrior = new gauntlet.Combatants.Human();
  warrior.setWeapon(new gauntlet.WarAxe());
  warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());

  gauntlet.orc = new gauntlet.Combatants.Orc();
  gauntlet.orc.generateClass();
  gauntlet.orc.setWeapon(new gauntlet.BroadSword());
  console.log(gauntlet.orc.toString());
  console.log("my orc mate", gauntlet.orc);

  /*
    Test code to generate a spell
   */
  var spell = new gauntlet.SpellBook.Sphere();
  console.log("spell: ", spell.toString());


  $(document).ready(function() {
    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          console.log(nextCard);
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          console.log(nextCard);
          break;
        case "card--battleground":
          moveAlong = ($("#player-name").val() !== "");
          gauntlet.playerInfoDiv();
          gauntlet.enemyInfoDiv();
          console.log(nextCard);
          break;

      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

  });

  return gauntlet

}(Gauntlet || {}));
