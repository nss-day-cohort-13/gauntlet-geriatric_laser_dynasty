var Gauntlet = (function(gauntlet){

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
       gauntlet.orc.health =  gauntlet.orc.health - gauntlet.finishPlayer.damage;
       }else{
         $('#missed').html('oh no, you missed!!!')
        }
     if (enemyDice >= 3) {
       gauntlet.finishPlayer.health = gauntlet.finishPlayer.health - gauntlet.orc.weapon.damage;
       }else{
         $('#missed').html('The monster missed you! Hoorah!')
       }
    $('#playerHealth').html(Math.abs(gauntlet.finishPlayer.health));
    $('#enemyHealth').html(Math.abs(gauntlet.orc.health));
    if (gauntlet.orc.health <= 0) {
      $('#enemyHealth').html('0');
      gauntlet.orc.weapon.damage = 0;
      $('#youWon').show();
      $('#attackButton').prop('disabled', false);
    } else  if (gauntlet.finishPlayer.health <= 0) {
      $('#playerHealth').html('0');
      gauntlet.finishPlayer.damage = 0;
      $('#youLost').show();
      $('#attackButton').prop('disabled', false);
      }
  }

  return gauntlet

}(Gauntlet || {}));
