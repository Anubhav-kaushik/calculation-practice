let mainWindow = document.querySelector('#main-window');

let quantCard = document.querySelector('#quant');

let quantOptions = document.querySelector('#quant-options');
let additionCard = document.querySelector('#addition');
let multiplyCard = document.querySelector('#multiply');
let squaresCard = document.querySelector('#squares');
let cubesCard = document.querySelector('#cubes');

// let quantAddition = document.querySelector('#quant-addition');
// let quantMultiply = document.querySelector('#quant-multiply');
// let quantMemory = document.querySelector('#quant-memory');
// let quantDivision = document.querySelector('#quant-division');

let hint = document.querySelector('.hint');
let hintBlock = document.querySelector('.hint-block');

quantCard.addEventListener('click', function() {
    quantOptions.classList.toggle('hide');
    mainWindow.classList.toggle('hide');
});

additionCard.addEventListener('click', function() {
    window.open('addition.html', '_blank');
});

multiplyCard.addEventListener('click', function() {
    window.open('multiplication.html', '_blank');
});

squaresCard.addEventListener('click', function() {
    window.open('squares.html', '_blank');
});

cubesCard.addEventListener('click', function() {
    window.open('cubes.html', '_blank');
});

hint.addEventListener('click', function() {
    hintBlock.classList.toggle('hide');
});



