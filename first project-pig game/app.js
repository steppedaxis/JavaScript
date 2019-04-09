var playerScore,roundScore,activePlayer,globalScore;
playerScore=[0,0];//array to hold player scores
roundScore=0;//this will hold the round score(in the current box) of each player
activePlayer=0;//this will hold the current active players turn
globalScore=0;
document.querySelector('.dice_img').style.display='none';// when we first open the game, then we want the dice images to be hidden and only when roll dice button is pressed,we want to display it
document.querySelector('.score_p0').textContent=0;
document.querySelector('.score_p1').textContent=0;
document.querySelector('.player_name_p0').style.textDecoration='underline';

// ROLL DICE BUTTON CLICK FUNCTION
document.querySelector('.roll_button').addEventListener('click',function(){
    //when we click a button, we want the following to happen:

    //1) WE WANT TO GENERATE A RANDOM NUMBER BETWEEN 1 AND 6
    var dice=Math.floor(Math.random()*6)+1;
    console.log(dice); 
    //2)DISPLAY THE RESULT
        var dice_img=document.querySelector('.dice_img');
        dice_img.style.display='block';
        dice_img.src='dice-'+dice+'.png';
        document.querySelector('.current_score_p'+activePlayer).textContent=dice;
    
    //3)UPDATE THE CURRENT SCORE AND IF THE ROLL IS EQUAL TO 1 THEN ZERO THE ROUND SCORE OF THE ACTIVE PLAYER
            if (dice!==1) {
                roundScore+=dice//add dice to roundscore
                document.querySelector('.current_score_p'+activePlayer).textContent=roundScore;//insert roundscore  into the current score number in the current box
            }
            else
            {
                globalScore+=roundScore
                roundScore=0;
                if (activePlayer===0) {
                    document.querySelector('.current_score_p'+activePlayer).textContent=roundScore;
                    playerScore[activePlayer]+=globalScore;
                    document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
                    if (playerScore[activePlayer]>=100) {
                        document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
                        alert('player-'+(activePlayer+1)+' has won the game!\npress new game for a new game!')
                    }
                    globalScore=0;
                    activePlayer=1;
                    document.querySelector('.player_name_p1').style.textDecoration='underline';
                    document.querySelector('.player_name_p0').style.textDecoration='none';
                }
                else
                {
                    document.querySelector('.current_score_p'+activePlayer).textContent=roundScore;
                    playerScore[activePlayer]+=globalScore;
                    document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
                    if (playerScore[activePlayer]>=100) {
                        document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
                        alert('player-'+(activePlayer+1)+' has won the game!\npress new game for a new game!')
                    }
                   globalScore=0;
                    activePlayer=0;
                    document.querySelector('.player_name_p0').style.textDecoration='underline';
                    document.querySelector('.player_name_p1').style.textDecoration='none';
                }
            }
    })

// HOLD BUTTON CLICK FUNCTION
document.querySelector('.hold_button').addEventListener('click',function() {
     roundScore=Number(document.querySelector('.current_score_p'+activePlayer).textContent);
    if (activePlayer===0) {
        globalScore+=roundScore;
        playerScore[activePlayer]+=globalScore;
        document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
        if (playerScore[activePlayer]>=100) {
            document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
            alert('player-'+(activePlayer+1)+' has won the game!\npress new game for a new game!')
        }
        globalScore=0;
        roundScore=0;
        document.querySelector('.current_score_p'+activePlayer).textContent=roundScore;
        activePlayer=1;
        document.querySelector('.player_name_p1').style.textDecoration='underline';
        document.querySelector('.player_name_p0').style.textDecoration='none';

    }
    else{
        globalScore+=roundScore;
        playerScore[activePlayer]+=globalScore;
        document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
        if (playerScore[activePlayer]>=100) {
            document.querySelector('.score_p'+activePlayer).textContent=playerScore[activePlayer];
            alert('player-'+(activePlayer+1)+' has won the game!\npress new game for a new game!')
        }
        globalScore=0;
        roundScore=0;
        document.querySelector('.current_score_p'+activePlayer).textContent=roundScore;
        activePlayer=0;
        document.querySelector('.player_name_p0').style.textDecoration='underline';
        document.querySelector('.player_name_p1').style.textDecoration='none';

    }
})

// NEW GAME BUTTON CLICK FUNCTION
document.querySelector('.new_button').addEventListener('click',function () {
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
})





