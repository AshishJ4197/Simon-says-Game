let gameSeq = [];
let userSeq = [];
let high_score = 0;
let btns = ['red', 'yellow', 'purple', 'green'];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');

let playSound = new Audio('button_click.mp3');
playSound.load();

let buzzSound = new Audio("buzzer_sound.mp3");
buzzSound.load();

document.addEventListener('keypress', function(event) {
    if (event.code === 'Enter' && !started) {
        started = true;
        console.log("game started");
        setTimeout(() => {
            levelUp();
            act_Btn_Listeners();
        },300);
    }
});

document.addEventListener('touchstart', function(event) {
    if (!started) {
        started = true;
        console.log("game started");
        setTimeout(() => {
            levelUp();
            act_Btn_Listeners();
        }, 400);
   
    }
});

function white_Flash(btn) {
    btn.classList.add('white_flash');
    setTimeout(() => {
        btn.classList.remove('white_flash');
    }, 350);
}

function green_Flash(btn) {
    btn.classList.add('green_flash');
    setTimeout(() => {
        btn.classList.remove('green_flash');
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randInx = Math.floor(Math.random() * 4);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    playSound.play().catch(function(error) {
        console.error('Failed to play sound:', error);
    });
    white_Flash(randBtn);
}

function check(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score is ${level - 1}</b> <br> Press <b>Enter</b> to start`;
        let score = level - 1;
        if (high_score < score) {
            high_score = score;
            document.querySelector('.inner_score').innerText = high_score;
        }
        document.querySelector('body').style.backgroundColor = 'red';
        buzzSound.play().catch(function(error) {
            console.error('Failed to play sound:', error);
        });
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 200);
        setTimeout(reset, 1500);
        console.log("Game ended");
    }
}

function btnPress(event) {
    if (!started) {
        return;
    }
    clicked_button = event.target;
    let user_color = clicked_button.getAttribute('id');
    if (user_color === 'red' || user_color === 'yellow' || user_color === 'green' || user_color === 'purple') {
        playSound.play();
        green_Flash(clicked_button);
        userSeq.push(user_color);
        check(userSeq.length - 1);  
    }
}

let all_btns = document.querySelector('.container');

function act_Btn_Listeners(){
    if (('ontouchstart' in window) && started ) {
        all_btns.addEventListener('touchend', btnPress);
    } else {
        all_btns.addEventListener('click', btnPress);
    }
}

function rem_Btn_Listeners(){
    all_btns.removeEventListener('touchend', btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    rem_Btn_Listeners();
}
