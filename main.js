function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

    const plates = document.querySelectorAll('.scene__body-plate'),
      elementsX = document.querySelectorAll('.plate-x'),
      elementsO = document.querySelectorAll('.plate-o'),
      player = document.getElementById('player'),
      winner = document.getElementById('winner');

    
// СЧЕТЧИК И ИГРОК

let counter;

function setCounter() {
    counter = randomInteger(1, 100) <= 50 ? 1 : 2;
    console.log(counter);
}
setCounter();

const startState = counter;


function newCounter() {
    if(counter % 2 !== 0) {
        player.innerHTML = 'O'
    } else {
        player.innerHTML = 'X'
    }
}
newCounter();

let state = {
    0: 'non',
    1: 'non',
    2: 'non',
    3: 'non',
    4: 'non',
    5: 'non',
    6: 'non',
    7: 'non',
    8: 'non',
}

// ДОБАВЛЕНИЕ НА КАРТУ

function toggleEl(element, i) {
        element[i].classList.add('active');

        console.log(startState);
        console.log(counter);
}

function win(member) {

    let s = state;
    let player = (member == 'x') ? 'X' : 'O';
    let point = (member == 'x') ? 3 : 0;

    if(s[0] + s[1] + s[2] == point) {
        gameOver(player);
    } else if(s[3] + s[4] + s[5] == point) {
        gameOver(player);
    } else if(s[6] + s[7] + s[8] == point) {
        gameOver(player);
    } else if(s[0] + s[3] + s[6] == point) {
        gameOver(player);
    } else if(s[1] + s[4] + s[7] == point) {
        gameOver(player);
    } else if(s[2] + s[5] + s[8] == point) {
        gameOver(player);
    } else if(s[0] + s[4] + s[8] == point) {
        gameOver(player);
    } else if(s[2] + s[4] + s[6] == point) {
        gameOver(player);
    } else if (counter == 10 && startState == 1 || counter == 11 && startState == 2){
        gameOver('draw')
    }
}

function gameOver(win) {


    let start = setTimeout(() => {
        if(win == 'X' || win == 'O') {
            winner.innerHTML = win;
            console.log('WIN');
        } else if (win == 'draw') {
            let result = document.querySelector('#draw');
            result.innerHTML = "ничья";
            console.log('NO WIN');
        }
        const modal = document.querySelector('.modal-wrapper');
        modal.classList.add('active');
    }, 300);
   

    let end = setTimeout(() => {
        location.reload();
    }, 3000)


}

function addOnMap() {

    plates.forEach((el, i = 0) => {
        el.addEventListener('click', () => {
            if(counter % 2 == 0) {
                state[i] = 1;
                console.log('походил X');
                counter += 1;
                toggleEl(elementsX, i);
                
                newCounter();
                win('x');
                
            } else if (counter % 2 !== 0) {

                state[i] = 0;
                console.log('походил O');
                counter += 1;
                toggleEl(elementsO, i);
                
                newCounter();
                win('o');
                
            }
        }, { once: true } );
    });
}
addOnMap();

