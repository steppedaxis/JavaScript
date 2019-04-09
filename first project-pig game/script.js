//we can define varaibels before puting things in them
var playerScore,roundScore,activePlayer,score_sum;
playerScore=[0,0];//array to hold player scores
roundScore=0;//this will hold the round score(in the current box) of each player
activePlayer=0;//this will hold the current active players turn
//document.querySelector('.current_score_p'+activePlayer).textContent=dice;//define that dice will change the current score view in the current score box by active player
//var x=document.querySelector('.score_p0').textContent;  //put into x the score of player 1
//as we can see,we may also put into varaibels ,numbers from html file
document.querySelector('.dice_img').style.display='none';// when we first open the game, then we want the dice images to be hidden and only when roll dice button is pressed,we want to display it
document.querySelector('.score_p0').textContent=0;
document.querySelector('.score_p1').textContent=0;
document.querySelector('#left').style.display='block';
document.querySelector('#right').style.display='none';
//we can add an annonymos function to an an .addEventListener() this is a function without a name'that will be called only once
//function button() we may also add a function of our own!

// ROLL DICE BUTTON CLICK FUNCTION
document.querySelector('.roll_button').addEventListener('click',function(){
    //when we click a button, we want the following to happen:
   //1) WE WANT TO GENERATE A RANDOM NUMBER BETWEEN 1 AND 6
    var dice=Math.floor(Math.random()*6)+1;// dice is a varaible that makes a random dice throws,
    console.log(dice); //log dice to the console
    //math.floor will make the number that we get from dice a integer and not a flaot
    //(math.random()*6)+1 will generete random numbers between 1 to 6 (math.random()*[limit])+1

    //2)DISPLAY THE RESULT
        var dice_img=document.querySelector('.dice_img');
        dice_img.style.display='block';
        dice_img.src='dice-'+dice+'.png';
        document.querySelector('.current_score_p'+activePlayer).textContent=dice;
    
    //3)UPDATE THE CURRENT SCORE AND IF THE ROLL IS EQUAL TO 1 THEN ZERO THE ROUND SCORE OF THE ACTIVE PLAYER AND MOVE TO THE NEXT PLAYER
    if (activePlayer===0) {
        document.querySelector('#left').style.display='block'        
        document.querySelector('#right').style.display='none';
        if (dice!==1) {
            roundScore+=dice
            document.querySelector('.current_score_p'+activePlayer).textContent=roundScore
        }
        else{
            roundScore=0;
            document.querySelector('.current_score_p'+activePlayer).textContent=roundScore
            activePlayer=1
        }
    }
    else{
        document.querySelector('#right').style.display='block';
        document.querySelector('#left').style.display='none';
        document.querySelector('.player_name_p0').style.textDecoration='none';
       if (dice!==1) {
            roundScore+=dice
            document.querySelector('.current_score_p'+activePlayer).textContent=roundScore
        }
        else{
            roundScore=0;
            document.querySelector('.current_score_p'+activePlayer).textContent=roundScore
            activePlayer=0
        }
    }
})

// HOLD BUTTON CLICK FUNCTION
document.querySelector('.hold_button').addEventListener('click',function() {
   if (activePlayer===0) {
    document.querySelector('#left').style.display='block'        
    document.querySelector('#right').style.display='none';
    playerScore[activePlayer]+=roundScore;
    if (playerScore[activePlayer]>=100) {
        alert('player '+(activePlayer+1)+'has won!')
        initial()
    }
    document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
    roundScore=0;
    document.querySelector('.current_score_p'+activePlayer).textContent=roundScore
    activePlayer=1;
    document.querySelector('#right').style.display='block';
    document.querySelector('#left').style.display='none';
   }
   else{
    document.querySelector('#right').style.display='block';
    document.querySelector('#left').style.display='none';
    playerScore[activePlayer]+=roundScore;
    if (playerScore[activePlayer]>=100) {
        alert('player '+(activePlayer+1)+'has won!')
        initial()
    }
    document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
    roundScore=0;
    document.querySelector('.current_score_p'+activePlayer).textContent=roundScore
    activePlayer=0;
    document.querySelector('#left').style.display='block'        
    document.querySelector('#right').style.display='none';
    }
    
})

// NEW GAME BUTTON CLICK FUNCTION
document.querySelector('.new_button').addEventListener('click',function () {
    initial()
})

// New Game function
function initial() {
    roundScore=0;//this will zero the round score(in the current box) of each player
    activePlayer=0;
    globalScore=0;
    playerScore=[0,0];
    document.querySelector('.dice_img').style.display='none';// when we first open the game, then we want the dice images to be hidden and only when roll dice button is pressed,we want to display it
    document.querySelector('.score_p0').textContent=globalScore;
    document.querySelector('.score_p1').textContent=globalScore;
    document.querySelector('.player_name_p0').style.textDecoration='underline';
    document.querySelector('.player_name_p1').style.textDecoration='none';
    document.querySelector('.current_score_p0').textContent=roundScore;
    document.querySelector('.current_score_p1').textContent=roundScore;
}










