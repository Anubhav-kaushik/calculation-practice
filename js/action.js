let mainWindow = document.querySelector('#main-window');

let quantCard = document.querySelector('#quant');

let quantOptions = document.querySelector('#quant-options');
let additionCard = document.querySelector('#addition');
let multiplyCard = document.querySelector('#multiply');
let memoryCard = document.querySelector('#memory');
let divisionCard = document.querySelector('#division');

let quantAddition = document.querySelector('#quant-addition');
let quantMultiply = document.querySelector('#quant-multiply');
// let quantMemory = document.querySelector('#quant-memory');
// let quantDivision = document.querySelector('#quant-division');

let hint = document.querySelector('.hint');
let hintBlock = document.querySelector('.hint-block');

quantCard.addEventListener('click', function() {
    quantOptions.classList.toggle('hide');
    mainWindow.classList.toggle('hide');
});

additionCard.addEventListener('click', function() {
    // quantOptions.classList.toggle('hide');
    // quantAddition.classList.toggle('hide');

    window.open('addition.html', '_blank');
});

multiplyCard.addEventListener('click', function() {
    // quantOptions.classList.toggle('hide');
    // quantMultiply.classList.toggle('hide');
    window.open('multiplication.html', '_blank');
});

memoryCard.addEventListener('click', function() {
    quantOptions.classList.toggle('hide');
    quantMemory.classList.toggle('hide');
});

divisionCard.addEventListener('click', function() {
    quantOptions.classList.toggle('hide');
    quantDivision.classList.toggle('hide');
});

hint.addEventListener('click', function() {
    hintBlock.classList.toggle('hide');
});

