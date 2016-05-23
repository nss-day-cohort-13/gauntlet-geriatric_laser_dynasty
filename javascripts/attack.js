var Gauntlet = (function(Gauntlet){

    $('#youWon').hide();
    $('#youLost').hide();
   $("#attackButton").click(function(e) {
    attack();
  })

  function attack(){
    var playerDice = Math.floor(Math.random() * 11);
    console.log('player dice: ', playerDice);
    var enemyDice = Math.floor(Math.random() * 11);
    console.log('enemy dice: ', enemyDice);
    $('#missed').html('');
     if (playerDice >= 3) {
       Gauntlet.orc.health =  Gauntlet.orc.health - Gauntlet.finishPlayer.damage;
       }else{
         $('#missed').html('oh no, you missed!!!')
        }
     if (enemyDice >= 3) {
       Gauntlet.finishPlayer.health = Gauntlet.finishPlayer.health - Gauntlet.orc.weapon.damage;
       }else{
         $('#missed').html('The monster missed you! Hoorah!')
       }
    $('#playerHealth').html(Math.abs(Gauntlet.finishPlayer.health));
    $('#enemyHealth').html(Math.abs(Gauntlet.orc.health));
    if (Gauntlet.orc.health <= 0) {
      $('#enemyHealth').html('0');
      Gauntlet.orc.weapon.damage = 0;
      $('#youWon').html('You Won!').show();
      $('#attackButton').prop('disabled', false);
      $('#messages').css("background-color", "lightblue");
      $('#missed').hide();
    } else  if (Gauntlet.finishPlayer.health <= 0) {
      $('#playerHealth').html('0');
      Gauntlet.finishPlayer.damage = 0;
      $('#youLost').html('You were defeated.').show();
      $('#attackButton').prop('disabled', false);
      $('#messages').css("background-color", "#FFB2B2");
      $('#missed').hide();
      }
  }

  return Gauntlet

}(Gauntlet || {}));
