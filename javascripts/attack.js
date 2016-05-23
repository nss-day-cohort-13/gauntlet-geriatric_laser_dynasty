
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
     orc.health =  orc.health - Gauntlet.finishPlayer.damage;
     }else{
       $('#missed').html('oh no, you missed!!!')
      }
   if (enemyDice >= 3) {
     Gauntlet.finishPlayer.health = Gauntlet.finishPlayer.health - orc.weapon.damage;
     }else{
       $('#missed').html('The moster missed you! Hoorah!')
     }
  $('#playerHealth').html(Math.abs(Gauntlet.finishPlayer.health));
  $('#enemyHealth').html(Math.abs(orc.health));
  if (orc.health <= 0) {
    $('#enemyHealth').html('0');
    orc.weapon.damage = 0;
    $('#youWon').show();
    $('#attackButton').prop('disabled', false);
  } else  if (Gauntlet.finishPlayer.health <= 0) {
    $('#playerHealth').html('0');
    Gauntlet.finishPlayer.damage = 0;
    $('#youLost').show();
    $('#attackButton').prop('disabled', false);
    }
}

