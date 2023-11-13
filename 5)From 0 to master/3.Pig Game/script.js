'use strict';

const score0El = document.querySelector('#score--0'),
      score1El = document.querySelector('#score--1'),
      player0El = document.querySelector('.player--0'),
      player1El = document.querySelector('.player--1'),
      current0El = document.querySelector('#current--0'),
      current1El = document.querySelector('#current--1'),
      diceEl = document.querySelector('.dice'),
      btnNew = document.querySelector('.btn--new'),
      btnRoll = document.querySelector('.btn--roll'),
      btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        playing = true;
      
        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;
      
        diceEl.classList.add('hidden');
        player0El.classList.remove('player--winner');
        player1El.classList.remove('player--winner');
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
      };
      init();

const swicthPlayer = () =>{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', ()=>{
    if(playing){
        const dice = Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        if(dice!==1){
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0El.textContent = currentScore;
        }else{
            swicthPlayer();
        }
    }
})

btnHold.addEventListener('click', ()=>{
    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        if(scores[activePlayer]>=15){    
            playing = false;    
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
            swicthPlayer();
        }
    }
})

btnNew.addEventListener('click', init);